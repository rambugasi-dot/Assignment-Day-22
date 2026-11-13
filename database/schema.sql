-- DATABASE FILE: membuat tabel untuk menyimpan produk
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price REAL NOT NULL,
  original_price REAL NOT NULL,
  description TEXT NOT NULL,
  benefits TEXT NOT NULL,
  image_url TEXT NOT NULL
);
