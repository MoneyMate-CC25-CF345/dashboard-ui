// Tunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Temukan semua tombol di dalam grup time-toggle
    const timeToggleButtons = document.querySelectorAll('.time-toggle button');
    
    // Fungsi untuk menangani klik pada tombol
    function handleToggleClick(event) {
        // Hapus kelas 'active' dari semua tombol
        timeToggleButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Tambahkan kelas 'active' hanya ke tombol yang diklik
        event.currentTarget.classList.add('active');
        
        // Di sini Anda bisa menambahkan logika lebih lanjut
        // Contoh: memuat data berdasarkan pilihan (mingguan, bulanan, tahunan)
        console.log('Filter diubah menjadi:', event.currentTarget.textContent);
    }
    
    // Tambahkan event listener ke setiap tombol
    timeToggleButtons.forEach(button => {
        button.addEventListener('click', handleToggleClick);
    });

});