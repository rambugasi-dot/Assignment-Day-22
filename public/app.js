// FRONT END JavaScript: ambil data dari API lalu tampilkan di halaman.
async function loadProduct() {
  const status = document.getElementById('status');
  try {
    // fetch meminta data dari endpoint Back End. Responsnya berupa JSON.
    const response = await fetch('/api/products/2');
    if (!response.ok) throw new Error(`Server mengembalikan status ${response.status}`);
    const product = await response.json();

    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').innerHTML = `$${product.price} <del>$${product.original_price}</del>`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productImage').src = product.image_url;
    document.getElementById('productImage').alt = product.name;

    const list = document.getElementById('productBenefits');
    product.benefits.forEach((benefit) => {
      const item = document.createElement('li');
      item.textContent = benefit;
      list.appendChild(item);
    });

    document.getElementById('productContent').hidden = false;
    status.textContent = 'Data berhasil dimuat dari API.';
  } catch (error) {
    status.textContent = `Gagal memuat produk: ${error.message}. Pastikan server sudah berjalan.`;
    console.error(error);
  }
}

document.getElementById('cartButton').addEventListener('click', () => {
  document.getElementById('cartMessage').textContent = 'Cooling Memory Foam Pillow ditambahkan (simulasi).';
});
loadProduct();
