// src/pages/Auth/LoginPage/LoginPage.js

import './LoginPage.css';

export function createLoginPage() {
  // Strukturnya sekarang jauh lebih sederhana
  return `
    <div class="login-content-wrapper">
      
      <div class="login-form-container">
        <h1>WELCOME</h1>
        <form class="login-form">
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Kata Sandi" required>
          <a href="#/lupa-password" class="forgot-password-link">Lupa Kata Sandi ?</a>
        </form>
      </div>

      <div class="login-actions-container">
        <button type="submit" class="btn btn-login">Masuk</button>
        <button type="button" class="btn btn-secondary">
          <img src="/google-logo.png" alt="Google" />
          Masuk dengan Google
        </button>
        <p class="register-link">
          Belum Punya Akun? <a href="#/register">Silahkan Registrasi</a>
        </p>
      </div>

    </div>
  `;
}