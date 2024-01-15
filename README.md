# ms-iqbal-ravi-betest

Jenius Technical Test Back End Developer.

## Instalasi

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/), [MongoDB](https://www.mongodb.com/try/download/community), dan [Redis](https://redis.io/download) di sistem Anda sebelum melanjutkan.

1. Clone repository:

    ```bash
    git clone https://github.com/bro-iqbal/ms-iqbal-ravi-betest
    ```

2. Masuk ke direktori proyek:

    ```bash
    cd ms-iqbal-ravi-betest
    ```

3. Install dependency:

    ```bash
    npm install
    ```

4. Jalankan aplikasi:

    ```bash
    node --watch index.js
    ```

    Aplikasi akan berjalan di http://localhost:3000 secara default.

## Menjalankan dengan Docker

1. Build docker image:

    ```bash
    docker build -t ms-iqbal-ravi-betest .
    ```

2. Jalankan container:

    ```bash
    docker run -p 3000:3000 -d ms-iqbal-ravi-betest
    ```

    Aplikasi akan berjalan di http://localhost:3000.

## Penggunaan

Deskripsikan cara menggunakan API atau aplikasi Anda. Contohnya:

1. **Endpoint Get Data:**

    - **URL:** `/auth/generate-data`
    - **Metode:** POST
    - **Deskripsi:** Generate JWT Token.
    - 
## Pengujian dengan Postman

1. Impor koleksi Postman yang disediakan di [postman](https://documenter.getpostman.com/view/1585979/2s9YsNeqdt).

2. Jalankan kumpulan tes untuk menguji endpoint dan fungsionalitas aplikasi.

## Kontribusi

Silakan merujuk ke [Panduan Kontribusi](CONTRIBUTING.md) untuk melihat cara berkontribusi pada proyek ini.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi [MIT](LICENSE).
