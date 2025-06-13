// src/pages/Auth/RegisterPage/RegisterPage.js
import './RegisterPage.css';

export function createRegisterPage() {
  return `
    <div class="register-content-wrapper">
      
      <div class="register-form-container">
        <form class="register-form">
          <h2>Buat Akun</h2>
          <div class="input-group">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="Nama Lengkap" required>
          </div>
          <div class="input-group">
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email" required>
          </div>
          <div class="input-group">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Kata Sandi" required>
          </div>
          <div class="input-group">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Konfirmasi Kata Sandi" required>
          </div>
           <div class="input-group">
            <i class="fa-solid fa-phone"></i>
            <input type="tel" placeholder="Nomor Ponsel" required>
          </div>
          <div class="terms-container">
            <input type="checkbox" id="terms" name="terms" required>
            <label for="terms">Dengan ini saya setuju syarat dan ketentuan yang berlaku</label>
          </div>
        </form>
      </div>

      <div class="register-actions-container">
        <button type="submit" class="btn btn-register">Mendaftar</button>
        <p class="login-link">
          Sudah memiliki akun? <a href="#/login">Masuk</a>
        </p>
      </div>

    </div>
  `;
}