// src/components/FinancialSummary/FinancialSummary.js

import './FinancialSummary.css';

export function createFinancialSummary() {
  return `
    <section class="financial-summary">
      <h3>Ringkasan Keuangan Anda</h3>
      <div class="summary-header">
        <div class="date-navigator">
          <i class="fa-solid fa-chevron-left"></i>
          <span>Juni 2026</span>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="time-toggle">
          <button>Mingguan</button>
          <button class="active">Bulanan</button>
          <button>Tahunan</button>
        </div>
      </div>
      <div class="summary-cards">
        <div class="card">
          <div class="card-icon-wrapper"><i class="fa-solid fa-wallet"></i></div>
          <div class="card-content">
            <p>Total Saldo Akhir</p>
            <strong>Rp. 15.000</strong>
          </div>
        </div>
        <div class="card">
            <div class="card-icon-wrapper income"><i class="fa-solid fa-arrow-up"></i></div>
          <div class="card-content">
            <p>Total Penghasilan</p>
            <strong class="text-green">Rp. 15.000</strong>
          </div>
        </div>
        <div class="card">
            <div class="card-icon-wrapper expense"><i class="fa-solid fa-arrow-down"></i></div>
          <div class="card-content">
            <p>Total Pengeluaran</p>
            <strong class="text-red">Rp. 15.000</strong>
          </div>
        </div>
        <div class="card visualization-card">
          <p>Lihat Grafik</p>
          <strong>Visualisasi Data</strong>
        </div>
      </div>
    </section>
  `;
}