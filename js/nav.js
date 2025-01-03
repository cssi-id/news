document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    // Hentikan aksi default link (jika perlu)
    e.preventDefault();

    // Hapus class 'active' dari semua tautan
    document.querySelectorAll('nav a').forEach(item => item.classList.remove('active'));

    // Tambahkan class 'active' ke tautan yang diklik
    this.classList.add('active');
  });
});