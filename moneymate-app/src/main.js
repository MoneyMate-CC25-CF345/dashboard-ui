// src/main.js

import './style.css' // Memuat gaya global
import { createSidebar } from './components/Sidebar/sidebar.js'
import { createHeader } from './components/Header/header.js'

// Fungsi untuk merender seluruh tata letak aplikasi
function renderLayout() {
  const appElement = document.getElementById('app');

  appElement.innerHTML = `
    <div class="dashboard-container" id="dashboard-container">
      ${createSidebar()}
      
      <main class="main-content">
        ${createHeader()} 
        
        <h1>Selamat Datang!</h1>
        <p>Konten utama akan ditampilkan di sini.</p>
      </main>
    </div>
  `;
}

// Fungsi untuk menambahkan semua event listener aplikasi
function addEventListeners() {
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  const dashboardContainer = document.getElementById('dashboard-container');
    
  // Pastikan kedua elemen ada sebelum menambahkan listener
  if (toggleBtn && dashboardContainer) {
    toggleBtn.addEventListener('click', () => {
      // Toggle kelas 'sidebar-collapsed' pada container utama
      dashboardContainer.classList.toggle('sidebar-collapsed');
    });
  }
}

// Alur kerja utama:
// 1. Render seluruh HTML ke halaman
renderLayout();
// 2. Setelah HTML ada, tambahkan fungsionalitasnya
addEventListeners();