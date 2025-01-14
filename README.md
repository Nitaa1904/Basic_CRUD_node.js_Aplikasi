## 1. Basic SetUp Node js Express (server.js)

## a. Rest API (server.js)

### get (a)

- npm run dev di terminal
- hit api di postman
- save respon postmannya

### post (f)

- raw
- body
- send

## 1) put delete

### get by id

1. - 3.

- cek di postman
- localhost:3000/api/v1/cars/:id
- di params ganti idnya sesuai kebutuhan
- send

### patch

4.  untuk beberapa data aja (kalau put untuk keseluruhan data)

- localhost:3000/api/v1/cars/:id
-

### delete

11.

## Database (ORM) (belum fix)

- npm i pg pg-hstore sequelize
- sequelize init => menghasilkan folder(config, model, seeders)
- create database.js di config (pindah isi config.js ke database.js dan tambahkan module.exports diawal)
- di models ubah dari config.js menjadi database.js (const config = require(\_\_dirname + "/../config/database.js")[env];)
- diterminal lakukan create model dan migrasion file untuk koneksi ke tabel (sequelize model:generate --name product --attributes name:string,price:float,stock:integer)
  a) koneksi ke database (panggil model di server.js)
  b) buat api baru
