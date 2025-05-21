import React from "react";
import Sidebar from "../../../components/common/Sidebar";
import global_style from "../../../styles/layout_wrapper.module.css";
import UserAvatarWithFilters from "../../../components/common/UserAvatarWithFilters";
import style from "./ProfilePageOthers.module.css";
import person_1 from "../../../assets/person_1.svg";
export default function ProfilePageOthers() {
  return (
    <div style={{ display: "flex" }}>
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
      </div>
    </div>
  );
}
