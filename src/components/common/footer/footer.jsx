import style from "./Footer.module.css";
import line from "../../../assets/common/line_foot.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const scrollToSection = (id: string) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div>
      <div className={style.container}>
        <div className={style.container_wrapper}>
          <div className={style.logo}>
            <a href="/">VOTE.KG</a>
          </div>
          <div className={style.wrapper}>
            <div className={style.links}>
              <div className={style.title}>Также</div>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                // onClick={() => scrollToSection("about_us")}
              >
                <div className={style.item}>О нас</div>
              </NavLink>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                // onClick={() => scrollToSection("about_us")}
              >
                <div className={style.item}>Услуги</div>
              </NavLink>
              <NavLink to="/faq" style={{ textDecoration: "none" }}>
                {/* <div className={style.item}>{t("navigation.faq")}</div> */}
              </NavLink>
            </div>

            <div className={style.links}>
              <div className={style.title}>Ссылки</div>
              <a href="/" style={{ textDecoration: "none" }}>
                <div className={style.item}>Главная</div>
              </a>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                // onClick={() => scrollToSection("otzyv")}
              >
                <div className={style.item}>Наши услуги</div>
              </NavLink>

              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                // onClick={() => scrollToSection("otzyv")}
              >
                <div className={style.item}>Отзывы</div>
              </NavLink>
            </div>

            <div className={style.links} id="contacts">
              <div className={style.title}>Контакты</div>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <div className={style.item}>manziro@gmail.com</div>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <div className={style.item}>+996704704716</div>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <div className={style.item}>tg: @azhygulov</div>
              </NavLink>
            </div>
          </div>

          {/* <div className={style.links}>
            <div className={style.title}>Дополнительное</div>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className={style.item}>Выбор языка</div>
            </NavLink>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className={style.item}>Выбор языка</div>
            </NavLink>
          </div> */}
          <div className={style.btn_wrapp}>
            <div className={style.btn_up} onClick={scrollToTop}>
              <img src={line} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
