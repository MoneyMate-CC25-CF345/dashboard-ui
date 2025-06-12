// src/main.js

import './style.css'
import { createSidebar } from './components/Sidebar/Sidebar.js'
import { createHeader } from './components/Header/Header.js'
import { createFinancialSummary } from './components/FinancialSummary/FinancialSummary.js'
import { createTransactionHistory } from './components/TransactionHistory/TransactionHistory.js'

// --- KONTEN UNTUK SETIAP HALAMAN ---
// Kita definisikan konten untuk setiap "path" di sini.
// Ini membuat router kita bersih dan mudah dikelola.
const pages = {
  '/': () => createHeader() + createFinancialSummary() + createTransactionHistory(),
  '/dompet': () => createHeader() + `<h2>Halaman Dompet</h2><p>Konten untuk dompet akan kita buat di sini.</p>`,
  '/laporan': () => createHeader() + `<h2>Halaman Laporan</h2>`,
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
  mainContent.innerHTML = pages[path] || pages['/'];

  // 4. Perbarui status 'active' di link sidebar
  updateActiveLink(path);

  // 5. Tambahkan event listener yang spesifik untuk halaman yang baru dirender
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
  // Nanti kita bisa tambahkan listener untuk halaman lain di sini
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

  // Listener global yang tidak bergantung pada halaman (seperti toggle sidebar)
  const toggleBtn = document.getElementById('toggle-sidebar-btn'); // Ini ada di dalam sidebar
  const dashboardContainer = document.getElementById('dashboard-container');
  if(toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      dashboardContainer.classList.toggle('sidebar-collapsed');
    });
  }
}

// --- MENJALANKAN APLIKASI ---
// 1. Bangun kerangka aplikasi
initializeApp();

// 2. Atur event listener untuk routing
window.addEventListener('hashchange', router); // Panggil router saat hash berubah
window.addEventListener('load', router);       // Panggil router saat halaman dimuat pertama kali