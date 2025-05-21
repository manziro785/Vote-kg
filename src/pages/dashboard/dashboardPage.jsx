// import style from "./dashboardPage.module.css";
import global_style from "../../styles/layout_wrapper.module.css";
import style from "./dashboardPage.module.css";
import React from "react";
import Sidebar from "../../components/common/Sidebar";
import UserAvatarWithFilters from "../../components/common/UserAvatarWithFilters";
import person_1 from "../../assets/person_1.svg";
import plan from "../../assets/common/plan_img.svg";
import like from "../../assets/common/like.svg";
import dislike from "../../assets/common/Unlike.svg";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className={global_style.container_dashboard} style={{}}>
        <UserAvatarWithFilters />
        {/* Основной контент */}

        <div className={style.card}>
          <div className={style.header}>
            <div className={style.title}>
              <h4>Выборы мэра города Бишкек - 2025</h4>
              <p>Период голосования: 20 мая - 25 июня 2025 года</p>
            </div>
            <div className={style.desc}>
              Голосуйте за нового мэра столицы! Ознакомьтесь с краткой
              информацией о каждом кандидате и выберите того, кто, по вашему
              мнению, сможет улучшить Бишкек. Ваш голос повлияет на будущее
              города.
            </div>
          </div>
          <div className={style.options}>
            <div className={style.option}>
              <img src={person_1} alt="" />
              <div className={style.option_title}>
                <h4>Руслан Сатаров</h4>
                <p>
                  Бывший вице-мэр по экономическому развитию и
                  цифровизации.Руслан сосредоточен на реформах в сфере
                  транспорта и муниципальных услуг. Его программа включает
                  внедрение электронной системы учета бюджета, запуск приложения
                  «Smart Bishkek» для жалоб и предложений от граждан, а также
                  модернизацию маршрутной сети города.
                </p>
                <div className={style.actions}>
                  <div>Проголосовать</div>
                  <div>Профиль</div>
                </div>
              </div>
            </div>
            <div className={style.option}>
              <img src={person_1} alt="" />
              <div className={style.option_title}>
                <h4>Руслан Сатаров</h4>
                <p>
                  Бывший вице-мэр по экономическому развитию и
                  цифровизации.Руслан сосредоточен на реформах в сфере
                  транспорта и муниципальных услуг. Его программа включает
                  внедрение электронной системы учета бюджета, запуск приложения
                  «Smart Bishkek» для жалоб и предложений от граждан, а также
                  модернизацию маршрутной сети города.
                </p>
                <div className={style.actions}>
                  <div>Проголосовать</div>
                  <div>Профиль</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.header}>
            <div className={style.title_surv}>
              <div className={style.person}>
                <img src={person_1} alt="" />
                <div>
                  <h5>Дастан Бекешев</h5>
                  <p>Депутат Жогорку Кенеша</p>
                </div>
              </div>
              <p>Период голосования: 20 мая - 25 июня 2025 года</p>
            </div>
            <h4>
              Что должно появиться на территории бывшего завода им. Фрунзе?
            </h4>
            <div className={style.desc}>
              Голосуйте за нового мэра столицы! Ознакомьтесь с краткой
              информацией о каждом кандидате и выберите того, кто, по вашему
              мнению, сможет улучшить Бишкек. Ваш голос повлияет на будущее
              города.
            </div>
          </div>
          <div className={style.options}>
            <div className={style.option}>
              <div className={style.option_title}>
                <h4>Парк аттракционов и развлечений</h4>
                <p>
                  Бывший вице-мэр по экономическому развитию и
                  цифровизации.Руслан сосредоточен на реформах в сфере
                  транспорта и муниципальных услуг. Его программа включает
                  внедрение электронной системы учета бюджета, запуск приложения
                  «Smart Bishkek» для жалоб и предложений от граждан, а также
                  модернизацию маршрутной сети города.
                </p>
                <div className={style.actions}>
                  <div>Проголосовать</div>
                  {/* <div>Профиль</div> */}
                </div>
              </div>
            </div>
            <div className={style.option}>
              <div className={style.option_title}>
                <h4>Парк аттракционов и развлечений</h4>
                <p>
                  Бывший вице-мэр по экономическому развитию и
                  цифровизации.Руслан сосредоточен на реформах в сфере
                  транспорта и муниципальных услуг. Его программа включает
                  внедрение электронной системы учета бюджета, запуск приложения
                  «Smart Bishkek» для жалоб и предложений от граждан, а также
                  модернизацию маршрутной сети города.
                </p>
                <div className={style.actions}>
                  <div>Проголосовать</div>
                  {/* <div>Профиль</div> */}
                </div>
              </div>
            </div>
            <div className={style.option}>
              <div className={style.option_title}>
                <h4>Парк аттракционов и развлечений</h4>
                <p>
                  Бывший вице-мэр по экономическому развитию и
                  цифровизации.Руслан сосредоточен на реформах в сфере
                  транспорта и муниципальных услуг. Его программа включает
                  внедрение электронной системы учета бюджета, запуск приложения
                  «Smart Bishkek» для жалоб и предложений от граждан, а также
                  модернизацию маршрутной сети города.
                </p>
                <div className={style.actions}>
                  <div>Проголосовать</div>
                  {/* <div>Профиль</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.header}>
            <div className={style.title_surv}>
              <div className={style.person}>
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
            <div className={style.desc}>
              Голосуйте за нового мэра столицы! Ознакомьтесь с краткой
              информацией о каждом кандидате и выберите того, кто, по вашему
              мнению, сможет улучшить Бишкек. Ваш голос повлияет на будущее
              города.
            </div>
          </div>
          <div className={style.options}>
            <img src={plan} alt="" style={{ width: "100%" }} />
          </div>
          <div className={style.btns}>
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
  );
}
