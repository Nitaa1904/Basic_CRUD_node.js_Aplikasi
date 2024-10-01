// konfig awal 
const fs = require("fs")
// pengganti http
const express = require("express")

// memanggil express jadi aplikasi
const app = express();

// default
app.get("/", (req, res) => {
    res.status(200).json({
        "status": "Success",
        "message": "Application is running good..."
    })
})

app.get('/nita', (req, res) => {
    res.status(200).json({
        "message": "ping succes"
    })
})


// membuat API dengan postman
//  /api/v1/(collection) => collectionya harus jamak (s)
app.get('/api/v1/cars', (req, res) => {
    try {
        const cars = JSON.parse(
            // membaca file cars.json
            fs.readFileSync(`${__dirname}/assets/data/cars.json`, "utf-8")
        );
        // proses api
        res.status(200).json({
            status: "sukses",
            message: "ping succes",
            isSuccess: true,
            // panggil data
            data: cars,
        })
        // jika eror
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "failed",
            error: error.message
        });
    }
})



// middlware / handler

app.use((req, res, next) => {
    res.status(404).json({
        "status": "Failed",
        "message": "API not exist !!!"
    })
})

app.listen("3000", () => {
    console.log("start aplikasi kita di port 3000")
})