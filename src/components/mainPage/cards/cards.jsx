import styles from "./cards.module.css";
import layout from "../../../styles/layout.module.css";
import postImg from "../../../assets/mainPage/banner/img_post.svg";

export default function Cards() {
  return (
    <section className={styles.bgRed}>
      <div className={layout.sectionWrapper}>
        <h2 className={styles.sectionTitle}>Последние посты</h2>
        <div className={styles.cardsRow}>
          <div className={styles.postCard}>
            <img src={postImg} alt="Пост" />
          </div>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Что обсуждают сейчас?</h3>
            <div className={styles.infoDesc}>
              <span className={styles.redLine} />
              <div>
                <p>
                  Посмотрите, какие инициативы предлагают президент, мэры и
                  депутаты.
                </p>
                <p>
                  Вы можете войти как гость, чтобы просто просматривать посты —
                  голосовать и комментировать смогут только зарегистрированные
                  пользователи.
                </p>
              </div>
            </div>
            <button className={styles.guestBtn}>Войти как гость</button>
          </div>
        </div>
      </div>
    </section>
  );
}
