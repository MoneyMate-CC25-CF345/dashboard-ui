// src/pages/LaporanPage/LaporanPage.js

import './LaporanPage.css';

export function createLaporanPage() {
  // Kita buat kerangka HTML dasarnya terlebih dahulu
  return `
    <div class="laporan-page-container">
      <div class="report-toggles">
        <button class="toggle-btn active" data-view="pengeluaran">
            <i class="fa-solid fa-arrow-up"></i> Pengeluaran
        </button>
        <button class="toggle-btn" data-view="penghasilan">
            <i class="fa-solid fa-arrow-down"></i> Penghasilan
        </button>
      </div>

      <div class="report-content">
        <div class="chart-container">
          <p style="text-align:center; padding-top: 50px;">Placeholder untuk Chart</p>
        </div>
        <div class="list-container">
          <p style="text-align:center; padding-top: 50px;">Placeholder untuk Daftar Rincian</p>
        </div>
      </div>
    </div>
  `;
}