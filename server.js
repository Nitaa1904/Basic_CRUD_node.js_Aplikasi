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