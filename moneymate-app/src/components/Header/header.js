import './Header.css';

export function createHeader() {
  return `
    <header class="main-header">
      <div class="header-left">
        <i class="fa-solid fa-bars" id="toggle-sidebar-btn" style="cursor: pointer;"></i>
        <h2>Buku Bawaan</h2>
      </div>
      <div class="header-right">
        <i class="fa-solid fa-bell"></i>
        <div class="user-profile">
          <div class="user-avatar">AS</div>
          <span>Ahmad Syahid</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </header>
  `;
}