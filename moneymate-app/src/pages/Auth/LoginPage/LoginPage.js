import './LoginPage.css';

export function createLoginPage() {
  return `
    <div class="login-card">
      
      <div class="login-card-top">
        <h1>WELCOME</h1>
        <form class="login-form">
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Kata Sandi" required>
          <a href="#/lupa-password" class="forgot-password-link">Lupa Kata Sandi ?</a>
        </form>
      </div>

      <div class="login-card-bottom">
        <button type="submit" class="btn btn-primary">Masuk</button>
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