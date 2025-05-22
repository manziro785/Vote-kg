import React from "react";
import Sidebar from "../../../components/common/Sidebar";
import global_style from "../../../styles/layout_wrapper.module.css";
import UserAvatarWithFilters from "../../../components/common/UserAvatarWithFilters";
import style from "./ProfilePageOthers.module.css";
import person_1 from "../../../assets/person_1.svg";
import style_post from "../../dashboard/dashboardPage.module.css";
import plan from "../../../assets/common/plan_img.svg";
import like from "../../../assets/common/like.svg";
import dislike from "../../../assets/common/Unlike.svg";

export default function ProfilePageOthers() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div className={global_style.container_dashboard} style={{}}>
        <div className={style.card_user}>
          <img src={person_1} alt="" />
          <div>
            <h3>Садыр Жапаров</h3>
            <h4>Президент Кыргызской Республики</h4>
            <p>
              Лидер, продвигающий развитие страны через реформы, инвестиции в
              образование, устойчивую экономику и современные технологии.
              Активно взаимодействует с гражданами, открыто делится инициативами
              и стратегическими планами. Уверен, что сильный Кыргызстан
              начинается с честного диалога между властью и народом.
            </p>
          </div>
        </div>
        <UserAvatarWithFilters />
        <div className={style.posts}>
          <div className={style_post.card}>
            <div className={style_post.header}>
              <div className={style_post.title_surv}>
                <div className={style_post.person}>
                  <img src={person_1} alt="" />
                  <div>
                    <h5>Садыр Жапаров</h5>
                    <p>Депутат Жогорку Кенеша</p>
                  </div>
                </div>
                <p>Период голосования: 20 мая - 25 июня 2025 года</p>
              </div>
              <h4>
                Что должно появиться на территории бывшего завода им. Фрунзе?
              </h4>
              <div className={style_post.desc}>
                Голосуйте за нового мэра столицы! Ознакомьтесь с краткой
                информацией о каждом кандидате и выберите того, кто, по вашему
                мнению, сможет улучшить Бишкек. Ваш голос повлияет на будущее
                города.
              </div>
            </div>
            {/* <div className={style_post.options}>
            <img src={plan} alt="" style={{ width: "100%" }} />
          </div> */}
            <div className={style_post.btns}>
              <div>
                <img src={like} alt="" />
                <p>100</p>
              </div>
              <div>
                <img src={dislike} alt="" />
                <p>100</p>
              </div>
            </div>
          </div>
          <div className={style_post.card}>
            <div className={style_post.header}>
              <div className={style_post.title_surv}>
                <div className={style_post.person}>
                  <img src={person_1} alt="" />
                  <div>
                    <h5>Садыр Жапаров</h5>
                    <p>Депутат Жогорку Кенеша</p>
                  </div>
                </div>
                <p>Период голосования: 20 мая - 25 июня 2025 года</p>
              </div>
              <h4>
                Что должно появиться на территории бывшего завода им. Фрунзе?
              </h4>
              <div className={style_post.desc}>
                Голосуйте за нового мэра столицы! Ознакомьтесь с краткой
                информацией о каждом кандидате и выберите того, кто, по вашему
                мнению, сможет улучшить Бишкек. Ваш голос повлияет на будущее
                города.
              </div>
            </div>
            {/* <div className={style_post.options}>
            <img src={plan} alt="" style={{ width: "100%" }} />
          </div> */}
            <div className={style_post.btns}>
              <div>
                <img src={like} alt="" />
                <p>100</p>
              </div>
              <div>
                <img src={dislike} alt="" />
                <p>100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
