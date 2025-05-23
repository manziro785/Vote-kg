import React from "react";
import global_style from "../../styles/layout_wrapper.module.css";
import style from "./VerifyAdmin.module.css";
import Sidebar from "../../components/common/Sidebar";
import demo_p1 from "../../assets/common/demo_p1.svg";
import demo_p2 from "../../assets/common/demo_p2.svg";

export default function VerifyAdmin() {
  return (
    <div>
      <Sidebar />
      <div className={global_style.container_dashboard} style={{}}>
        <div className={style.card}>
          <div className={style.box}>
            <div className={style.info}>
              <div>
                <div className={style.upTitle}>ФИО</div>
                <div className={style.value}>Садыр Жапаров</div>
              </div>
              <div>
                <div className={style.upTitle}>ID паспорта</div>
                <div className={style.value}>228715001</div>
              </div>{" "}
              <div>
                <div className={style.upTitle}>ИНН</div>
                <div className={style.value}>21304198740007</div>
              </div>{" "}
              <div>
                <div className={style.upTitle}>Должность</div>
                <div className={style.value}>
                  Президент Кыргызской Республики
                </div>
              </div>{" "}
              <div>
                <div className={style.upTitle}>Название учреждения</div>
                <div className={style.value}>Кабинет президента</div>
              </div>
            </div>
            <div className={style.images}>
              <div>
                <div className={style.upTitle}>
                  Фото ID-паспорта (передняя сторона)
                </div>
                <div className={style.value_img}>
                  <img src={demo_p1} alt="" />
                </div>
              </div>
              <div>
                <div className={style.upTitle}>
                  Фото ID-паспорта (задняя сторона)
                </div>
                <div className={style.value_img}>
                  <img src={demo_p2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.btns}>
            <div className={style.btn_verify}>Подтвердить</div>
            <div className={style.btn_reject}>Отвергнуть</div>
          </div>
        </div>
        <div className={style.card}>
          <div className={style.box}>
            <div className={style.info}>
              <div>
                <div className={style.upTitle}>ФИО</div>
                <div className={style.value}>Садыр Жапаров</div>
              </div>
              <div>
                <div className={style.upTitle}>ID паспорта</div>
                <div className={style.value}>228715001</div>
              </div>{" "}
              <div>
                <div className={style.upTitle}>ИНН</div>
                <div className={style.value}>21304198740007</div>
              </div>{" "}
              <div>
                <div className={style.upTitle}>Должность</div>
                <div className={style.value}>
                  Президент Кыргызской Республики
                </div>
              </div>{" "}
              <div>
                <div className={style.upTitle}>Название учреждения</div>
                <div className={style.value}>Кабинет президента</div>
              </div>
            </div>
            <div className={style.images}>
              <div>
                <div className={style.upTitle}>
                  Фото ID-паспорта (передняя сторона)
                </div>
                <div className={style.value_img}>
                  <img src={demo_p1} alt="" />
                </div>
              </div>
              <div>
                <div className={style.upTitle}>
                  Фото ID-паспорта (задняя сторона)
                </div>
                <div className={style.value_img}>
                  <img src={demo_p2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.btns}>
            <div className={style.btn_verify}>Подтвердить</div>
            <div className={style.btn_reject}>Отвергнуть</div>
          </div>
        </div>
      </div>
    </div>
  );
}
