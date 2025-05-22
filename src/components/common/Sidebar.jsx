import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./Sidebar.module.css";
import icon1 from "../../assets/mainPage/icons/icon1.svg";
import icon3 from "../../assets/mainPage/icons/icon3.svg";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleNavigation = (path) => {
    if (
      location.pathname.includes("create-survey") ||
      location.pathname.includes("take-survey") ||
      location.pathname.includes("survey")
    ) {
      const event = new CustomEvent("navigationAttempt", { detail: { path } });
      window.dispatchEvent(event);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="/">VOTE.KG</a>
        </div>
        <nav className={style.btns}>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? style.active : "")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/dashboard");
                }}
              >
                <img src={icon1} alt="" /> Главная
              </NavLink>
            </li>
            {role === "ADMIN" && (
              <li>
                <NavLink
                  to="/posts"
                  className={({ isActive }) => (isActive ? style.active : "")}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/posts");
                  }}
                >
                  <img src={icon1} alt="" /> Посты
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? style.active : "")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/profile");
                }}
              >
                <img src={icon3} alt="" /> Профиль
              </NavLink>
            </li>
            {/* <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? style.active : "")}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/about");
              }}
            >
              <img src={icon4} alt="" /> О проекте
            </NavLink>
          </li> */}
          </ul>
        </nav>
        <button
          className={style.logoutBtn}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Выйти
        </button>
      </div>
      <div className={style.rightSide}></div>
    </>
  );
};

export default Sidebar;
