import style from "./howItWork.module.css";

import img1 from "../../../assets/mainPage/icons/icon1.svg";
import img2 from "../../../assets/mainPage/icons/icon2.svg";
import img3 from "../../../assets/mainPage/icons/icon3.svg";
import img4 from "../../../assets/mainPage/icons/icon4.svg";

const cards = [
  {
    className: "item1",
    img: img1,
    title: "Регистрируйтесь",
    subtitle:
      "Подтвердите личность через паспорт и лицо - это нужно для защиты от фейков.",
  },
  {
    className: "item2",
    img: img2,
    title: "Следите за инициативами",
    subtitle:
      "Читайте посты от президента, мэров и депутатов, разделённые по регионам и должностям.",
  },
  {
    className: "item3",
    img: img3,
    title: "Выражайте мнение",
    subtitle:
      "Ставьте лайк или дизлайк, пишите комментарии - ваш голос будет учтён.",
  },
  {
    className: "item4",
    img: img4,
    title: "Влияйте на решения",
    subtitle:
      "Чем больше реакций, тем выше шанс, что идея будет доработана или пересмотрена.",
  },
];

export default function HowItWork() {
  return (
    <div>
      <div className={style.howItWork}>
        <div className={style.title}>Как это работает?</div>
        <div className={style.cards}>
          {cards.map((card, index) => (
            <div className={style[card.className]} key={index}>
              <img src={card.img} alt="" />
              <div className={style.item_title}>{card.title}</div>
              <div className={style.item_subtitle}>{card.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
