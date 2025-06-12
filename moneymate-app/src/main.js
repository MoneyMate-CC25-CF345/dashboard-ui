// src/main.js

import './style.css'
import { createSidebar } from './components/Sidebar/Sidebar.js'
import { createHeader } from './components/Header/Header.js'
import { createFinancialSummary } from './components/FinancialSummary/FinancialSummary.js'
import { createTransactionHistory } from './components/TransactionHistory/TransactionHistory.js' // <-- 1. Impor komponen terakhir

// Fungsi untuk merender seluruh tata letak aplikasi
function renderLayout() {
  const appElement = document.getElementById('app');

  appElement.innerHTML = `
    <div class="dashboard-container" id="dashboard-container">
      ${createSidebar()}
      
      <main class="main-content">
        ${createHeader()}
        ${createFinancialSummary()}
        ${createTransactionHistory()}
      </main>
    </div>
  `;
}

// Fungsi untuk menambahkan semua event listener aplikasi
function addEventListeners() {
  // Listener untuk Toggle Sidebar
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  const dashboardContainer = document.getElementById('dashboard-container');
    
  if (toggleBtn && dashboardContainer) {
    toggleBtn.addEventListener('click', () => {
      dashboardContainer.classList.toggle('sidebar-collapsed');
    });
  }

  // Listener untuk Tombol Filter Waktu
  const timeToggleButtons = document.querySelectorAll('.time-toggle button');
  
  timeToggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      timeToggleButtons.forEach(btn => btn.classList.remove('active'));
      event.currentTarget.classList.add('active');
    });
  });
}

// Alur kerja utama:
renderLayout();
addEventListeners();