// src/main.js

import './style.css'
import { createSidebar } from './components/Sidebar/sidebar.js'
import { createHeader } from './components/Header/header.js'
import { createFinancialSummary } from './components/FinancialSummary/FinancialSummary.js'

// Fungsi untuk merender seluruh tata letak aplikasi
function renderLayout() {
  const appElement = document.getElementById('app');

  appElement.innerHTML = `
    <div class="dashboard-container" id="dashboard-container">
      ${createSidebar()}
      
      <main class="main-content">
        ${createHeader()}
        ${createFinancialSummary()} 

        </main>
    </div>
  `;
}

// Fungsi untuk menambahkan semua event listener aplikasi
function addEventListeners() {
  // --- Listener untuk Toggle Sidebar ---
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  const dashboardContainer = document.getElementById('dashboard-container');
    
  if (toggleBtn && dashboardContainer) {
    toggleBtn.addEventListener('click', () => {
      dashboardContainer.classList.toggle('sidebar-collapsed');
    });
  }

  // --- Listener BARU untuk Tombol Filter Waktu ---
  const timeToggleButtons = document.querySelectorAll('.time-toggle button');
  
  timeToggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Hapus kelas 'active' dari semua tombol
      timeToggleButtons.forEach(btn => btn.classList.remove('active'));
      // Tambahkan kelas 'active' ke tombol yang baru saja diklik
      event.currentTarget.classList.add('active');
    });
  });
}

// Alur kerja utama:
renderLayout();
addEventListeners();