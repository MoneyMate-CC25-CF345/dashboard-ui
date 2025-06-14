import './style.css'
// Impor untuk Layout Aplikasi
import { createSidebar } from './components/Sidebar/Sidebar.js'
import { createHeader } from './components/Header/Header.js'
import { createFinancialSummary } from './components/FinancialSummary/FinancialSummary.js'
import { createTransactionHistory } from './components/TransactionHistory/TransactionHistory.js'
import { createDompetPage } from './pages/DompetPage/DompetPage.js'
import { createLaporanPage } from './pages/LaporanPage/LaporanPage.js'

import { createLoginPage } from './pages/Auth/LoginPage/LoginPage.js'
import { createRegisterPage } from './pages/Auth/RegisterPage/RegisterPage.js'


const appElement = document.getElementById('app');

// --- DEFINISI KONTEN HALAMAN ---

// 1. Konten untuk Halaman di dalam APLIKASI
const appPages = {
  '/': () => createHeader() + createFinancialSummary() + createTransactionHistory(),
  '/dompet': () => createHeader() + createDompetPage(),
  '/laporan': () => createHeader() + createLaporanPage(),
  // Tambahkan halaman aplikasi lain di sini
};

const authPages = {
  '/login': createLoginPage, // Langsung panggil fungsinya
  '/register': createRegisterPage,
  '/lupa-password': () => `<h1>Halaman Lupa Password</h1>`,
  '/reset-password': () => `<h1>Halaman Reset Password</h1>`
};

// --- FUNGSI RENDER LAYOUT ---

/**
 *Merender layout utama aplikasi (dengan sidebar dan header)
 */
function renderAppLayout(path) {
  // Bangun kerangka HTML untuk layout aplikasi
  appElement.innerHTML = `
    <div class="dashboard-container" id="dashboard-container">
      ${createSidebar()}
      <main class="main-content"></main>
    </div>
  `;
  const mainContent = document.querySelector('.main-content');
  const pageRenderer = appPages[path] || appPages['/'];
  mainContent.innerHTML = pageRenderer();

  // Jalankan semua fungsi setup untuk layout aplikasi
  setupAppEventListeners(path);
  updateActiveLink(path);
}

// Merender layout untuk halaman autentikasi.
function renderAuthLayout(path) {
  // Tentukan kelas layout berdasarkan path
  let layoutClass = 'layout-login'; // Default
  if (path === '/register') {
    layoutClass = 'layout-register';
  }
  appElement.innerHTML = `
    <div class="auth-layout ${layoutClass}">
      <div class="auth-bg-top"></div>
      <div class="auth-bg-bottom"></div>
      <div class="auth-content-container"></div>
    </div>
  `;
  
  // Render konten halaman ke dalam container
  const authContentContainer = document.querySelector('.auth-content-container');
  const pageRenderer = authPages[path];
  if (pageRenderer) {
    authContentContainer.innerHTML = pageRenderer();
  }
}


// --- ROUTER UTAMA (MANAJER) ---

function router() {
  const path = window.location.hash.substring(1) || '/';

  // Cek manual apakah path adalah untuk halaman autentikasi
  if (path.startsWith('/login') || path.startsWith('/register') || path.startsWith('/lupa-password') || path.startsWith('/reset-password')) {
    renderAuthLayout(path);
  } else {
    renderAppLayout(path);
  }
}

// --- FUNGSI EVENT LISTENER & PEMBANTU ---

function updateActiveLink(path) {
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (!sidebarMenu) return;

  sidebarMenu.querySelectorAll('a').forEach(link => link.classList.remove('active'));
  const activeLink = sidebarMenu.querySelector(`a[href="#${path}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

/**
 * Menjalankan semua event listener yang dibutuhkan oleh layout aplikasi.
 */
function setupAppEventListeners(path) {
  // Listener untuk toggle sidebar
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  const dashboardContainer = document.getElementById('dashboard-container');
  if (toggleBtn && dashboardContainer) {
    toggleBtn.addEventListener('click', () => {
      dashboardContainer.classList.toggle('sidebar-collapsed');
    });
  }

  // Listener spesifik untuk halaman Laporan
  if (path === '/laporan') {
    const toggleButtons = document.querySelectorAll('.report-toggles .toggle-btn');
    toggleButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const clickedButton = event.currentTarget;
        const viewToShow = clickedButton.dataset.view;
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');
        document.querySelectorAll('.report-content').forEach(view => view.classList.add('hidden'));
        const contentViewToShow = document.querySelector(`.report-content[data-content-view="${viewToShow}"]`);
        if (contentViewToShow) {
          contentViewToShow.classList.remove('hidden');
        }
      });
    });
  }

  // Listener spesifik untuk halaman utama (Buku Catatan)
  if (path === '/') {
    const timeToggleButtons = document.querySelectorAll('.time-toggle button');
    timeToggleButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        timeToggleButtons.forEach(btn => btn.classList.remove('active'));
        event.currentTarget.classList.add('active');
      });
    });
  }
}

// --- MENJALANKAN APLIKASI ---
window.addEventListener('hashchange', router);
window.addEventListener('load', router);