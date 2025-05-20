import style from "./sadyr.module.css";
import layout from "../../../styles/layout.module.css";
import img from "../../../assets/mainPage/banner/img_sadyr.svg";

export default function Sadyr() {
  return (
    <div>
      <div className={layout.sectionWrapper}>
        <div className={style.container}>
          <div className={style.left}>
            <img src={img} alt="image Sadyr" />
          </div>
          <div className={style.right}>
            <div className={style.message}>
              <p>
                Голос народа никогда не доходит до властей, он сильно
                искажается... Я приехал услышать голос каждого гражданина,
                увидеть, чем живёт наш народ, какие у него проблемы.
              </p>
              <p className={style.author} style={{ textAlign: "end" }}>
                - Садыр Жапаров
              </p>
            </div>
            <div className={style.text_block}>
              <p>
                С Vote.kg каждый житель Кыргызстана может быть услышан -
                напрямую, открыто, честно. Мы создаём пространство, где мнение
                людей формирует общественный отклик и даёт понять власти: что
                важно, что принимается, а что - нет.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
