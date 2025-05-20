import style from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={style.header}>
        <header>
          <a href="/" className={style.logo}>
            VOTE.KG
          </a>
          <div className={style.nav}>
            <div className={style.btn}>О платформе</div>
            <div className={style.btn}>Шаги</div>
            <div className={style.btn}>Посты</div>
            <div className={style.btn}>Важность</div>
          </div>
        </header>
      </div>
    </>
  );
}
