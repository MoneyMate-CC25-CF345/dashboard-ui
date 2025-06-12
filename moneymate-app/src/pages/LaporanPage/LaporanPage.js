// src/pages/LaporanPage/LaporanPage.js

import './LaporanPage.css';

export function createLaporanPage() {
  return `
    <div class="laporan-page-container">
      <div class="report-toggles">
        <button class="toggle-btn active" data-view="pengeluaran">
            <i class="fa-solid fa-arrow-up"></i> Pengeluaran
        </button>
        <button class="toggle-btn" data-view="pemasukan">
            <i class="fa-solid fa-arrow-down"></i> Pemasukan
        </button>
      </div>

      <div class="report-content" data-content-view="pengeluaran">
        <div class="chart-container">
          <div class="donut-chart" style="background: conic-gradient(var(--light-grey) 0% 5%, var(--text-red) 5% 100%);">
            <div class="chart-center">
              <span>Pengeluaran</span>
              <strong>Rp. 15.000</strong>
            </div>
          </div>
        </div>
        <div class="list-container">
          <div class="report-list-item">
            <div class="item-detail"><div class="item-icon"><i class="fa-solid fa-utensils"></i></div><span>Makanan</span></div>
            <span class="item-amount text-red">Rp. 15.000</span>
          </div>
          <div class="report-list-item">
            <div class="item-detail"><div class="item-icon"><i class="fa-solid fa-fire-burner"></i></div><span>Bahan Bakar</span></div>
            <span class="item-amount text-red">Rp. 15.000</span>
          </div>
        </div>
      </div>

      <div class="report-content hidden" data-content-view="pemasukan">
        <div class="chart-container">
          <div class="donut-chart" style="background: conic-gradient(var(--text-green) 0% 100%);">
            <div class="chart-center">
              <span>Pemasukan</span>
              <strong>Rp. 30.000</strong>
            </div>
          </div>
        </div>
        <div class="list-container">
           <div class="report-list-item">
            <div class="item-detail"><div class="item-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div><span>Gaji</span></div>
            <span class="item-amount text-green">Rp. 30.000</span>
          </div>
        </div>
      </div>

    </div>
  `;
}