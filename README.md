Langkah2
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







### Judul Project: **NodeAPI Starter: Building a Simple Backend with Express and Sequelize**

### Deskripsi:
Proyek ini bertujuan untuk membangun aplikasi backend sederhana menggunakan Node.js, Express, dan Sequelize. Proyek ini mencakup pengelolaan routing, pembuatan middleware kustom, dan pengujian API menggunakan Postman. Aplikasi ini dirancang untuk mengelola data secara efisien dengan implementasi model database dan migrasi menggunakan Sequelize.

Langkah-langkah utama dalam proyek ini meliputi:
1. **Membuat Aplikasi Node.js Sederhana:**
   - Initialisasi proyek Node.js dengan dependensi seperti `express`, `sequelize`, dan `pg`.
   - Membuat struktur proyek berbasis MVC (Model-View-Controller).

2. **Mengatur Routing dengan Express:**
   - Membuat routing dasar untuk berbagai endpoint (GET, POST, PATCH, DELETE).
   - Mengelola data dengan HTTP methods dan struktur RESTful API.

3. **Mengimplementasikan Middleware Kustom:**
   - Membuat middleware untuk autentikasi dan penanganan error.
   - Menangani request yang tidak valid dengan middleware khusus.

4. **Pengelolaan Database dengan Sequelize:**
   - Konfigurasi database dengan Sequelize dan integrasi CLI.
   - Pembuatan model dan migrasi database untuk tabel seperti `products` dan `transactionDetails`.

5. **Pengujian API menggunakan Postman:**
   - Menggunakan Postman untuk menguji endpoint dan memverifikasi integrasi API.

### Kompetensi yang Dipelajari:
- Dasar-dasar Node.js dan framework Express untuk membangun API.
- Pembuatan dan pengelolaan middleware kustom.
- Pengelolaan routing RESTful API.
- Penggunaan Sequelize untuk database ORM.
- Pengujian API menggunakan Postman.

### Output:
- **Aplikasi Backend Sederhana:**
  - Endpoint RESTful API untuk data produk dan transaksi.
  - Middleware untuk autentikasi dan penanganan error.
  - Sistem routing terorganisir dengan Express.

- **Database Terkelola:**
  - Tabel-tabel database yang dihasilkan dari model dan migrasi.
  - Data produk dan transaksi yang dapat diakses melalui API.

Proyek ini memberikan fondasi yang kuat untuk pengembangan backend dengan teknologi modern, memadukan konsep-konsep dasar dan praktik terbaik dalam pengembangan aplikasi server-side.

