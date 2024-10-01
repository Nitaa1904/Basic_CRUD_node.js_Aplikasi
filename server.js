// Konfig awal 
const fs = require("fs");
// Pengganti http
const express = require("express");

// Memanggil express jadi aplikasi
const app = express();

// Middleware untuk membaca JSON dari request body
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.status(200).json({
        "status": "Success",
        "message": "Application is running good..."
    });
});

app.get('/nita', (req, res) => {
    res.status(200).json({
        "message": "ping success"
    });
});

const cars = JSON.parse(
    // Membaca file cars.json
    fs.readFileSync(`${__dirname}/assets/data/cars.json`, "utf-8")
);

// Membuat API dengan Postman
//  /api/v1/(collection) => collection-nya harus jamak (s)
app.get('/api/v1/cars', (req, res) => {
    try {
        const cars = JSON.parse(
            // Membaca file cars.json
            fs.readFileSync(`${__dirname}/assets/data/cars.json`, "utf-8")
        );
        // Proses API
        res.status(200).json({
            status: "sukses",
            message: "ping success",
            isSuccess: true,
            totalData: cars.length,
            // Panggil data
            data: {
                cars,
            },
        });
    } catch (error) {
        // Jika terjadi error
        res.status(500).json({
            status: "error",
            message: "failed",
            error: error.message
        });
    }
});

// POST
app.post('/api/v1/cars', (req, res) => {
    // Insert data baru dari body request
    const newCar = req.body;

    // Masukkan data ke dalam array cars
    cars.push(newCar);

    // Simpan data ke file cars.json
    fs.writeFile(`${__dirname}/assets/data/cars.json`, JSON.stringify(cars), (err) => {
        if (err) {
            res.status(500).json({
                status: "error",
                message: "Failed to write file",
                error: err.message
            });
        } else {
            res.status(201).json({
                status: "sukses",
                message: "ping success",
                isSuccess: true,
                // Panggil data yang baru
                data: {
                    car: newCar,
                },
            });
        }
    });
});

// Middleware untuk handle route yang tidak ada
app.use((req, res, next) => {
    res.status(404).json({
        "status": "Failed",
        "message": "API not exist !!!"
    });
});

// Menjalankan server di port 3000
app.listen(3000, () => {
    console.log("Start aplikasi kita di port 3000");
});
