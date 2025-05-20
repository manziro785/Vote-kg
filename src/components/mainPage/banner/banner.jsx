import styles from "./banner.module.css";
import img1 from "../../../assets/mainPage/banner/img_bg.svg";
import img2 from "../../../assets/mainPage/banner/img_bg2.svg";
import { useState, useEffect } from "react";
import layout from "../../../styles/layout.module.css";

export default function Banner() {
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bannerBgWrapper}>
      <div
        className={styles.bannerBg}
        style={{
          backgroundImage: `url(${img1})`,
          opacity: activeBg === 0 ? 1 : 0,
          zIndex: 1,
        }}
      />
      <div
        className={styles.bannerBg}
        style={{
          backgroundImage: `url(${img2})`,
          opacity: activeBg === 1 ? 1 : 0,
          zIndex: 1,
        }}
      />
      <div className={styles.overlay} />
      <div className={layout.sectionWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Ваше <span className={styles.highlight}>мнение</span> имеет значение
          </h1>
          <p className={styles.desc}>
            В демократическом обществе голос каждого должен быть услышан.
            <br />
            Vote.kg создан для того, чтобы правительство было ближе к народу.
            Чтобы решения принимались не в кабинетах, а с учётом общественного
            мнения.
          </p>
          <div className={styles.buttons}>
            <button className={styles.registerBtn}>Регистрация</button>
            <button className={styles.loginBtn}>Вход</button>
          </div>
        </div>
      </div>
    </div>
  );
}
