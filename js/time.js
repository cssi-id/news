function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Menambahkan angka 0 di depan jam, menit, dan detik yang kurang dari 10
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
  
    // Menampilkan jam
    const timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('digital-clock').textContent = timeString;
  }
  
  // Memperbarui jam setiap detik
  setInterval(updateClock, 1000);
  
  // Memanggil fungsi pertama kali agar jam tampil tanpa menunggu 1 detik
  updateClock();