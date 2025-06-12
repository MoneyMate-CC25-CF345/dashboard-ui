// src/main.js

import './style.css' // Memuat gaya global
// import { createSidebar } from './components/Sidebar/Sidebar.js'; --> gunsakan ini jika folder moneymate-app menjadi root project
import { createSidebar } from '../src/components/Sidebar/sidebar.js';

// Fungsi untuk merender seluruh tata letak aplikasi
function renderLayout() {
  const appElement = document.getElementById('app');

  // Kita buat kerangka utama dengan Grid
  // Lalu kita panggil createSidebar() untuk mengisi bagian sidebar
  appElement.innerHTML = `
    <div class="dashboard-container" id="dashboard-container">
      ${createSidebar()}
      
      <main class="main-content">
        <h1>Selamat Datang!</h1>
        <p>Konten utama akan ditampilkan di sini.</p>
      </main>
    </div>
  `;
}

// Panggil fungsi render untuk menampilkan aplikasi
renderLayout();

// Kita akan menambahkan event listener di sini nanti setelah membuat komponen Header