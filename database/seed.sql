-- DATABASE FILE: mengisi data awal ke tabel products
INSERT OR IGNORE INTO products
(id, name, category, price, original_price, description, benefits, image_url)
VALUES
(2, 'Cooling Memory Foam Pillow', 'Bedding', 69, 89,
 'Bantal memory foam yang dirancang untuk kenyamanan dan membantu mengurangi rasa panas saat tidur.',
 'Memory foam yang menopang kepala|Cover lembut dan breathable|Desain nyaman untuk penggunaan harian',
 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80');
