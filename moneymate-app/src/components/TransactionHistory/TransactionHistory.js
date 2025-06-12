// src/components/TransactionHistory/TransactionHistory.js

import './TransactionHistory.css';

export function createTransactionHistory() {
  return `
    <section class="transaction-history">
      <h3>Riwayat Transaksi</h3>
      <div class="transaction-list">
        <div class="transaction-header">
          <span>Deskripsi</span>
          <span>Kategori</span>
          <span>Jumlah</span>
        </div>
        <div class="transaction-item">
          <div class="transaction-detail">
            <div class="transaction-icon"><i class="fa-solid fa-utensils"></i></div>
            <span>Makanan</span>
          </div>
          <div class="transaction-category">Pengeluaran</div>
          <div class="transaction-amount text-red">Rp. 15.000</div>
        </div>
        <div class="transaction-item">
          <div class="transaction-detail">
            <div class="transaction-icon"><i class="fa-solid fa-fire-burner"></i></div>
            <span>Bahan Bakar</span>
          </div>
          <div class="transaction-category">Pengeluaran</div>
          <div class="transaction-amount text-red">Rp. 15.000</div>
        </div>
        <div class="transaction-item">
          <div class="transaction-detail">
            <div class="transaction-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
            <span>Upah</span>
          </div>
          <div class="transaction-category">Pemasukan</div>
          <div class="transaction-amount text-green">Rp. 15.000</div>
        </div>
      </div>
    </section>
  `;
}