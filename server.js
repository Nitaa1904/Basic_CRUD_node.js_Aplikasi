// Konfig awal 
const fs = require("fs");
// Pengganti http
const express = require("express");
const { status } = require("express/lib/response");

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



// row query (mengambil spesifik data)
app.get('/api/v1/cars/:id', (req, res) => { // request url parameter dinamis
    // select * from table where id="1" OR NAME="Nita"
    const id = req.params.id * 1; // * 1 akan menjadi number
    console.log(id); // pemanggilan id, jika manggil nama aja gak usah pake .id
    // array method
    const car = cars.find(i => i.id === id); // tipe data yang sama
    
        // basic eror handling
        if(!cars) {
            console.log("gak ada data");
            return res.status(404).json({
                status: "failed",
                message: `Failed get data this id : ${id}`,
                isSuccess: false,
                data: null,
            });
        }

    res.status(200).json({
        status: "sucses",
        message: "succes",
        isSuccess: true,
        data: {
            car,
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
