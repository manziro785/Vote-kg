import styles from "./aboutUs.module.css";
import layout from "../../../styles/layout.module.css";
import voteImg from "../../../assets/mainPage/banner/img_vote.svg";

export default function AboutUs() {
  return (
    <section className={layout.sectionWrapper} style={{ width: "auto" }}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Что такое Vote.kg?</h2>
          {/* <div className={styles.redLine} /> */}
          <p className={styles.desc}>
            Vote.kg - это гражданская платформа, созданная для открытого диалога
            между народом и властью.
            <br />
            Здесь официальные лица - президент, депутаты, мэры публикуют свои
            инициативы и идеи. А каждый житель Кыргызстана может выразить свою
            реакцию, поставив лайк или дизлайк.
            <br />
            Это не просто сайт. Это шаг к настоящей прозрачности, где мнение
            народа учитывается при принятии решений.
          </p>
        </div>
        <div className={styles.imgBlock}>
          <img src={voteImg} alt="Vote" className={styles.img} />
        </div>
      </div>
    </section>
  );
}
