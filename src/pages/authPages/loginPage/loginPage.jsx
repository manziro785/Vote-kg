import "./loginPage.css";
import background from "../../../assets/authimg.png";

const AuthPage = () => {
  return (
    <div className="auth-container">
      <div
        className="auth-image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="auth-form">
        <h1 className="auth-title">Авторизация</h1>
        <div className="auth-box">
          <h2>Войдите в свой аккаунт</h2>
          <p>Введите свою почту и пароль чтобы доступ к системе</p>

          <label>Электронная почта *</label>
          <input type="email" placeholder="Введите свою почту" />

          <label>Пароль *</label>
          <input type="password" placeholder="Введите свой пароль" />

          <div className="auth-buttons">
            <button className="btn-back">←</button>
            <button className="btn-next">→</button>
          </div>

          <a href="#" className="auth-link">
            Уже есть аккаунт?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
