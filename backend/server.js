// BACK END: JavaScript menggunakan Node.js + Express.
// sql.js menjalankan SQLite tanpa perlu kompilasi native di Windows.
const express = require('express');
const path = require('path');
const fs = require('fs');
const initSqlJs = require('sql.js');

const app = express();
const PORT = 3000;
const rootDir = path.join(__dirname, '..');
const dbDir = path.join(rootDir, 'database');

async function startServer() {
  const SQL = await initSqlJs();
  const db = new SQL.Database();

  // Jalankan SQL CREATE TABLE dan INSERT dari file yang disertakan.
  const schema = fs.readFileSync(path.join(dbDir, 'schema.sql'), 'utf8');
  const seed = fs.readFileSync(path.join(dbDir, 'seed.sql'), 'utf8');
  db.run(schema);
  db.run(seed);

  app.use(express.static(path.join(rootDir, 'public')));

  // API endpoint: Front End meminta data produk berdasarkan ID.
  app.get('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({ error: 'Product ID harus berupa angka positif.' });
    }

    const statement = db.prepare('SELECT * FROM products WHERE id = $id');
    statement.bind({ '$id': id });
    let product = null;
    if (statement.step()) product = statement.getAsObject();
    statement.free();

    if (!product) {
      return res.status(404).json({ error: 'Produk tidak ditemukan.' });
    }

    // Ubah teks benefits yang dipisahkan | menjadi array untuk Front End.
    res.json({ ...product, benefits: String(product.benefits).split('|') });
  });

  app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

  app.listen(PORT, () => {
    console.log(`Chill Sleep berjalan di http://localhost:${PORT}`);
    console.log(`API produk: http://localhost:${PORT}/api/products/2`);
  });
}

startServer().catch((error) => {
  console.error('Gagal menjalankan server:', error);
  process.exit(1);
});
