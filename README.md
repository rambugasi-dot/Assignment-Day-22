# Chill Sleep Store — Mini Project Day 22

Proyek ini merupakan lanjutan dari Study Case Phase 1 / Practical 1. Proyek menggunakan JavaScript vanilla, HTML, CSS, dan Node.js untuk membangun website katalog serta detail produk Chill Sleep Store.

## 1. Struktur Project

Struktur utama project:

- `public/index.html` — halaman katalog dan detail produk 1 (Adjustable Chill Pillow), menggunakan data hardcoded.
- `public/product1.html` — halaman produk 1 dari struktur baseline.
- `public/product2.html` — halaman detail produk 2 (Cooling Memory Foam Pillow).
- `public/app.js` — JavaScript frontend pada baseline untuk produk kedua.
- `public/style.css` — styling halaman produk kedua.
- `backend/server.js` — backend Node.js + Express dari baseline.
- `database/schema.sql` — struktur tabel database.
- `database/seed.sql` — data awal produk kedua.
- `package.json` — konfigurasi project dan dependencies.

## 2. Halaman dan Batasan Pengerjaan

### Halaman 1 — Adjustable Chill Pillow

Halaman ini menggunakan data produk hardcoded di frontend.

Fitur interaksi yang dikerjakan:
- Memilih variasi ukuran produk.
- Mengubah jumlah produk menggunakan kontrol quantity.
- Memvalidasi quantity agar berupa bilangan bulat positif.
- Menolak quantity yang melebihi batas stok simulasi.
- Memperbarui subtotal berdasarkan ukuran dan quantity.
- Menampilkan feedback ketika pengguna menambahkan produk ke keranjang.
- Memperbarui cart count lokal.
- Menyimpan data transaksi sementara dalam array `cartItems`.

**Catatan stok:** Karena data stok tidak tersedia pada source produk, digunakan stok simulasi sebanyak 10 unit di frontend untuk keperluan validasi. Angka tersebut bukan informasi stok aktual dari backend.

### Halaman 2 — Cooling Memory Foam Pillow

Halaman kedua tetap dipertahankan sebagai bagian dari baseline Study Case Phase 1.

Sesuai arahan mentor untuk pengerjaan saat ini, fokus tugas dibatasi pada manipulasi frontend dengan data hardcoded. Pengembangan dan pengujian fitur API-driven tidak dilakukan dalam pengerjaan ini.

### Backend dan API Baseline

Struktur backend dan endpoint baseline tetap dipertahankan. Tidak ada backend atau endpoint baru yang dibuat sebagai bagian dari pengerjaan ini.

## 3. Teknologi

- HTML
- CSS / Tailwind
- JavaScript Vanilla
- DOM Manipulation
- Event Handling
- Node.js dan Express (baseline project)
- Git dan GitHub

## 4. Cara Menjalankan Project

1. Buka folder project menggunakan Visual Studio Code.
2. Jalankan instalasi dependencies jika diperlukan:

   ```bash
   npm.cmd install
   ```

3. Jalankan project menggunakan:

   ```bash
   npm.cmd start
   ```

4. Buka browser dan akses:

   `http://localhost:3000`

5. Untuk melihat katalog dan halaman produk, gunakan navigasi yang tersedia pada website.

Biarkan terminal tetap terbuka selama website digunakan.

## 5. Pengujian

Pengujian dilakukan pada halaman hardcoded untuk memastikan validasi quantity, perubahan subtotal, feedback, dan cart count berjalan sesuai harapan.

| No. | Input / Kondisi | Expected Result | Actual Result | Bukti |
|---:|---|---|---|---|
| 1 | Quantity = 0 | Quantity ditolak dan pesan validasi muncul | Berhasil, pesan validasi muncul | Screenshot |

| 2 | Quantity = 4.5 | Quantity ditolak karena bukan bilangan bulat | Berhasil, pesan validasi muncul | Screenshot |

| 3 | Quantity = -1 | Quantity ditolak | Berhasil, pesan validasi muncul | Screenshot |

| 4 | Quantity = 11 | Quantity ditolak karena melebihi stok simulasi 10 | Berhasil, pesan validasi muncul | Screenshot |

| 5 | Ukuran King, quantity 3 | Subtotal menjadi $312 | Berhasil, subtotal berubah menjadi $312 | Output browser |

| 6 | Ukuran Queen, quantity 3 | Subtotal menjadi $267 | Berhasil, subtotal berubah menjadi $267 | Output browser |

| 7 | Menambahkan produk King sebanyak 3 unit | Cart count bertambah 3 | Berhasil | Output browser |

| 8 | Menambahkan produk Queen sebanyak 1 unit | Cart count bertambah 1 sehingga total menjadi 4 | Berhasil | Output browser |

| 9 | Menambahkan dua transaksi berbeda | Kedua transaksi tersimpan sebagai objek terpisah | Berhasil, dua objek ditemukan di `state.cartItems` | Output Console |

### Bukti Pengujian

Screenshot dan output browser/Console yang relevan disimpan di folder project ini yaitu lebih spesifik di dalam folder screenshot sebagai dokumentasi pengujian project.

## 6. Penggunaan AI

AI digunakan sebagai pendamping pembelajaran untuk:
- Memahami fungsi dan konsep JavaScript.
- Membantu menemukan dan memperbaiki kesalahan kode.
- Menjelaskan DOM manipulation dan event handling.
- Membantu menyusun skenario serta dokumentasi pengujian.

Setiap perubahan kode dipelajari dan diuji kembali oleh student menggunakan browser dan Visual Studio Code.

