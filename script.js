// Tunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // --- FUNGSI UNTUK TOMBOL TOGGLE WAKTU ---
    const timeToggleButtons = document.querySelectorAll('.time-toggle button');
    
    function handleToggleClick(event) {
        timeToggleButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        console.log('Filter diubah menjadi:', event.currentTarget.textContent);
    }
    
    timeToggleButtons.forEach(button => {
        button.addEventListener('click', handleToggleClick);
    });

    // --- FUNGSI BARU UNTUK TOGGLE SIDEBAR ---
    const toggleBtn = document.getElementById('toggle-sidebar-btn');
    const dashboardContainer = document.getElementById('dashboard-container');

    // Cek jika elemen ditemukan sebelum menambahkan event listener
    if (toggleBtn && dashboardContainer) {
        toggleBtn.addEventListener('click', () => {
            // Menambahkan atau menghapus kelas 'sidebar-collapsed' pada container utama
            dashboardContainer.classList.toggle('sidebar-collapsed');
        });
    }
});