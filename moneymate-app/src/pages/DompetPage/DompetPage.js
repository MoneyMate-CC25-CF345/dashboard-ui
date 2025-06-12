// src/pages/DompetPage/DompetPage.js

import './DompetPage.css';

export function createDompetPage() {
  return `
    <div class="dompet-page-container">
      
      <div class="asset-summary-card">
        <p class="asset-title">Aset Bersih</p>
        <p class="asset-amount">Rp. 15.000</p>
        <p class="asset-detail">Aset Bersih <span>Rp. 15.000</span></p>
      </div>

      <div class="income-expense-summary">
        <div class="card">
            <div class="card-icon-wrapper income"><i class="fa-solid fa-arrow-up"></i></div>
          <div class="card-content">
            <p>Total Pemasukan</p>
            <strong class="text-green">Rp. 30.000</strong>
          </div>
        </div>
        <div class="card">
            <div class="card-icon-wrapper expense"><i class="fa-solid fa-arrow-down"></i></div>
          <div class="card-content">
            <p>Total Pengeluaran</p>
            <strong class="text-red">Rp. 15.000</strong>
          </div>
        </div>
      </div>
      
      <div class="wallet-list-section">
        <h3 class="wallet-group-title">Tunai</h3>
        <div class="wallet-item">
          <div class="wallet-item-detail">
            <div class="wallet-item-icon"><i class="fa-solid fa-wallet"></i></div>
            <span>Ahmad Syahid</span>
          </div>
          <span class="wallet-item-amount">Rp. 15.000</span>
        </div>
      </div>

    </div>
  `;
}