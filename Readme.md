# Cinema Ticket API

Cinema Ticket API adalah sebuah aplikasi untuk mengelola pemesanan tiket bioskop, termasuk fitur untuk mengelola film, studio, showtime, dan tiket.

## Daftar Isi
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Menjalankan Server](#menjalankan-server)
- [Menjalankan di Docker](#menjalankan-docker)
- [Menyiapkan Database](#menyiapkan-database)
- [API Endpoint](#api-endpoint)


## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 14.x atau yang lebih baru)
- [MySQL](https://www.mysql.com/) (versi 5.7 atau yang lebih baru)

## Instalasi

1. Clone repositori ini ke komputer Anda:
     ```bash
      git clone https://github.com/zain120500/MCMTestBe.git
      cd cinema-ticket-api

 Instal semua dependensi:

    npm install

## Menyiapkan Database
Buat database baru di MySQL. Anda bisa menggunakan perintah SQL berikut:


    CREATE DATABASE cinema_db;

Ubah konfigurasi database di file src/config.js sesuai dengan pengaturan database Anda:

    const sequelize = new Sequelize('cinema_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
    });

Jalankan migrasi untuk membuat tabel yang diperlukan:

    npm run migrate

(Opsional) Anda dapat menjalankan seeder untuk mengisi data awal:

    npm run seed
## Menjalankan Server
Untuk menjalankan server dalam mode pengembangan, gunakan perintah berikut:

    npm run dev

Server akan berjalan di http://localhost:3000.


## Menjalankan di Docker

1. Jalankan Docker Compose untuk membangun dan menjalankan container:

       docker-compose up --build

2. ubah file di /config/config.json

       {
         "development": {
         "username": "root",
         "password": null,
         "database": "cinema_db",
         "host": "db",
         "dialect": "mysql"
       },
         "test": {
         "username": "root",
         "password": null,
         "database": "database_test",
         "host": "db",
         "dialect": "mysql"
       },
         "production": {
         "username": "root",
         "password": null,
         "database": "database_production",
         "host": "db",
         "dialect": "mysql"
       }
     }

3. Migrasi Database: Setelah container berjalan, Anda perlu melakukan migrasi database. Gunakan perintah berikut untuk menjalankan migrasi:

       docker-compose exec app npx sequelize-cli db:migrate

4. Seed Data ke Database: 
Jika Anda ingin memasukkan data awal ke database (seeding), gunakan perintah ini:

       docker-compose exec app npx sequelize-cli db:seed:all

5. Setelah container berjalan, Anda dapat mengakses aplikasi di browser melalui alamat berikut:

       http://localhost:3000

## API Endpoint

Untuk memudahkan Anda dalam menguji API, saya menyediakan koleksi Postman. Anda dapat mengunduh koleksi ini dan mengimpornya ke dalam aplikasi Postman Anda.

### Cara Menggunakan Koleksi Postman

1. **Unduh Koleksi Postman**
   - [Download Cinema Ticket API Postman Collection](https://drive.google.com/file/d/1qJt4e81xoJEGSkqhBhJzmNAk5DJYrTTy/view?usp=sharing
)

2. **Impor ke Postman**
   - Buka aplikasi Postman.
   - Klik pada tombol "Import" di kiri atas.
   - Pilih file yang telah Anda unduh.
   - Setelah diimpor, Anda akan melihat semua endpoint API terdaftar.

3. **Menjalankan Endpoint**
   - Pilih endpoint yang ingin Anda uji dari koleksi yang diimpor.
   - Sesuaikan parameter jika diperlukan (misalnya, ID film atau studio).
   - Klik tombol "Send" untuk menjalankan permintaan.
   - Anda akan melihat respons dari API di bagian bawah.

## Base URL
http://localhost:3000/api

## Endpoint Summary

### Film API
- `GET /films`: Mendapatkan daftar semua film.
- `GET /films/:id`: Mendapatkan detail film berdasarkan ID.
- `POST /films`: Membuat film baru.
- `PUT /films/:id`: Memperbarui film berdasarkan ID.
- `DELETE /films/:id`: Menghapus film berdasarkan ID.

### Studio API
- `GET /studios`: Mendapatkan daftar semua studio.
- `GET /studios/:id`: Mendapatkan detail studio berdasarkan ID.
- `POST /studios`: Membuat studio baru.
- `PUT /studios/:id`: Memperbarui studio berdasarkan ID.
- `DELETE /studios/:id`: Menghapus studio berdasarkan ID.

### Showtime API
- `POST /showtimes`: Membuat showtime baru.
- `GET /showtimes`: Mendapatkan daftar semua showtime.
- `GET /showtimes/:id`: Mendapatkan detail showtime berdasarkan ID.
- `PUT /showtimes/:id`: Memperbarui showtime berdasarkan ID.
- `DELETE /showtimes/:id`: Menghapus showtime berdasarkan ID.

### Ticket API
- `POST /ticket`: Membuat ticket baru.
- `GET /ticket`: Mendapatkan daftar semua ticket.
- `GET /ticket/:id`: Mendapatkan detail ticket berdasarkan ID.
- `PUT /ticket/:id`: Memperbarui ticket berdasarkan ID.
- `DELETE /ticket/:id`: Menghapus ticket berdasarkan ID.


