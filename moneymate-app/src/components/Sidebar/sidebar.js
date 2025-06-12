// Impor file CSS yang spesifik untuk komponen ini
import './Sidebar.css';

// Fungsi ini akan dipanggil untuk membuat HTML dari sidebar
export function createSidebar() {
  // Kita gunakan backtick (`) untuk membuat string multi-baris
  return `
    <nav class="sidebar">
      <div class="sidebar-header">
        <img src="/big-logo.png" alt="MoneyMate Logo" class="logo-big">
        <img src="/mini-logo.png" alt="MoneyMate Mini Logo" class="logo-mini">
      </div>
      <ul class="sidebar-menu">
        <li><a href="#" class="active"><i class="fa-solid fa-book-bookmark"></i> <span>Buku Catatan</span></a></li>
        <li><a href="#"><i class="fa-solid fa-wallet"></i> <span>Dompet</span></a></li>
        <li><a href="#"><i class="fa-solid fa-file-alt"></i> <span>Laporan</span></a></li>
        <li><a href="#"><i class="fa-solid fa-plus-circle"></i> <span>Lainnya</span></a></li>
        <li><a href="#"><i class="fa-solid fa-cog"></i> <span>Pengaturan</span></a></li>
      </ul>
      <div class="sidebar-footer">
        <button class="logout-btn">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  `;
}