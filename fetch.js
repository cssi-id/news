

async function loadArticles() {
    try {
      // Mengambil file JSON
      const response = await fetch('./json/utama.json');
      
      // Cek apakah status HTTP berhasil (200)
      if (!response.ok) {
        throw new Error('Gagal memuat file JSON');
      }
  
      const data = await response.json(); // Mengonversi JSON
  
      // Cek jika data memiliki 'Berita utama'
      const content = document.getElementById('content');
      content.innerHTML = ''; // Kosongkan konten yang ada
  
      if (data['Berita utama']) {
        data['Berita utama'].forEach(article => {
          const articleDiv = document.createElement('div');
          articleDiv.className = 'article';
  
          // Memeriksa dan menampilkan konten artikel
          let articleContent = '';
          if (Array.isArray(article.content)) {
            articleContent = article.content.join(''); // Gabungkan konten menjadi satu string tanpa tambahan pemisah
          } else {
            articleContent = article.content;
          }
  
          articleDiv.innerHTML = `
            <h1>${article.title}</h1>
            <span class="date">${article.date}</span><br><br>
            <div><img src="${article['image-src']}" class="img-src" alt="Image"></div>
            <p>${articleContent}</p>
            <p>
              sumber <a href="${article.reff}" target="_blank">${article.sumber}</a>
            </p>
          `;
  
          content.appendChild(articleDiv); // Menambahkan artikel ke dalam konten
        });
      } else {
        content.innerHTML = '<p>Data berita tidak ditemukan!</p>';
      }
  
    } catch (error) {
      console.error('Error fetching the data:', error);
      document.getElementById('content').innerHTML = '<p>Terjadi kesalahan saat memuat berita. Silakan coba lagi nanti.</p>';
    }
  }
  
  // Memanggil fungsi loadArticles ketika halaman dimuat
  window.onload = loadArticles;
  