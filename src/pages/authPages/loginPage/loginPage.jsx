import "./loginPage.css";
import background from "../../../assets/authimg.png";
import { useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch("https://votekg-1.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        let errData;
        try {
          errData = await response.json();
        } catch {
          errData = await response.text();
        }
        throw new Error((errData && errData.message) || "Ошибка авторизации");
      }
      let data;
      try {
        data = await response.json();
      } catch {
        data = await response.text();
      }
      if (data && data.token) {
        localStorage.setItem("token", data.token);
      }
      setSuccess("Успешный вход!");
      // Можно сохранить токен/роль: localStorage.setItem('role', data.role)
      // window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

          {error && (
            <div
              style={{ color: "#e74c3c", marginBottom: 12, fontWeight: 600 }}
            >
              {error}
            </div>
          )}
          {success && (
            <div
              style={{ color: "#27ae60", marginBottom: 12, fontWeight: 600 }}
            >
              {success}
            </div>
          )}

          <label>Электронная почта *</label>
          <input
            type="email"
            placeholder="Введите свою почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Пароль *</label>
          <input
            type="password"
            placeholder="Введите свой пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="auth-buttons">
            <button
              className="btn-back"
              type="button"
              onClick={() => window.history.back()}
            >
              ←
            </button>
            <button
              className="btn-next"
              type="button"
              disabled={loading}
              onClick={handleLogin}
            >
              {loading ? "Вход..." : "→"}
            </button>
          </div>

          <a href="/register" className="auth-link">
            Нет аккаунта? Зарегистрироваться
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
