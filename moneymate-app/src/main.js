import './style.css'
import { createSidebar } from './components/Sidebar/sidebar.js'
import { createHeader } from './components/Header/Header.js'
import { createFinancialSummary } from './components/FinancialSummary/FinancialSummary.js'
import { createTransactionHistory } from './components/TransactionHistory/TransactionHistory.js'
// Impor komponen halaman 
import { createDompetPage } from './pages/DompetPage/DompetPage.js'
import { createLaporanPage } from './pages/LaporanPage/LaporanPage.js'

// --- KONTEN UNTUK SETIAP HALAMAN ---
const pages = {
  '/': () => createHeader() + createFinancialSummary() + createTransactionHistory(),
  // 2. Ganti placeholder dengan fungsi komponen yang sebenarnya
  '/dompet': () => createHeader() + createDompetPage(), 
  '/laporan': () => createHeader() + createLaporanPage(),
  '/lainnya': () => createHeader() + `<h2>Halaman Lainnya</h2>`,
  '/pengaturan': () => createHeader() + `<h2>Halaman Pengaturan</h2>`
};

// --- FUNGSI ROUTER UTAMA ---
function router() {
  // 1. Dapatkan path dari URL hash, hapus '#', dan jika kosong, gunakan '/'
  const path = window.location.hash.substring(1) || '/';
  
  // 2. Dapatkan elemen konten utama
  const mainContent = document.querySelector('.main-content');
  if (!mainContent) return; // Keluar jika elemen tidak ditemukan

  // 3. Render konten yang sesuai dari object 'pages'. Jika path tidak ada, render halaman utama.
  // BENAR: Tambahkan () untuk mengeksekusi fungsi dan mendapatkan hasil HTML-nya
  const pageRenderer = pages[path] || pages['/'];
  mainContent.innerHTML = pageRenderer(); 

  // 4. Perbarui status 'active' di link sidebar
  updateActiveLink(path);

  // 5. PASANG ULANG EVENT LISTENER SETELAH RENDER
  // Listener untuk toggle sidebar (sekarang ada di sini)
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  const dashboardContainer = document.getElementById('dashboard-container');
  if (toggleBtn && dashboardContainer) {
    toggleBtn.addEventListener('click', () => {
      dashboardContainer.classList.toggle('sidebar-collapsed');
    });
  }


  // 6. Tambahkan event listener yang spesifik untuk halaman yang baru dirender
  addPageSpecificEventListeners(path);
}

// --- FUNGSI PEMBANTU ---
function updateActiveLink(path) {
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (!sidebarMenu) return;

  // Hapus kelas 'active' dari semua link
  sidebarMenu.querySelectorAll('a').forEach(link => link.classList.remove('active'));

  // Tambahkan kelas 'active' ke link yang cocok dengan path
  const activeLink = sidebarMenu.querySelector(`a[href="#${path}"]`);
  if (activeLink) {
    activeLink.parentElement.querySelector('a').classList.add('active');
  }
}

function addPageSpecificEventListeners(path) {
  if (path === '/') {
    // Tambahkan listener untuk tombol filter waktu di halaman utama
    const timeToggleButtons = document.querySelectorAll('.time-toggle button');
    timeToggleButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        timeToggleButtons.forEach(btn => btn.classList.remove('active'));
        event.currentTarget.classList.add('active');
      });
    });
  }
  
   // Tambahkan listener untuk tombol toggle di halaman laporan pemasukan dan pengeluaran
    if (path === '/laporan') {
    const toggleButtons = document.querySelectorAll('.report-toggles .toggle-btn');
    const allContentViews = document.querySelectorAll('.report-content');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const clickedButton = event.currentTarget;
        const viewToShow = clickedButton.dataset.view;

        // 1. Update active tombol
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');

        // 2. Sembunyikan konten yang tidak aktif
        allContentViews.forEach(view => view.classList.add('hidden'));

        // 3. Tampilkan konten yang sesuai
        const contentViewToShow = document.querySelector(`.report-content[data-content-view="${viewToShow}"]`);
        if (contentViewToShow) {
          contentViewToShow.classList.remove('hidden');
        }
      });
    });
  }

}

// --- INISIALISASI APLIKASI ---
// Fungsi ini hanya berjalan sekali untuk membangun kerangka statis
function initializeApp() {
  const appElement = document.getElementById('app');
  appElement.innerHTML = `
    <div class="dashboard-container" id="dashboard-container">
      ${createSidebar()}
      <main class="main-content"></main> </div>
  `;

  
}

// --- MENJALANKAN APLIKASI ---
// 1. Bangun kerangka aplikasi
initializeApp();

// 2. Atur event listener untuk routing
window.addEventListener('hashchange', router); // Panggil router saat hash berubah
window.addEventListener('load', router);       // Panggil router saat halaman dimuat pertama kali