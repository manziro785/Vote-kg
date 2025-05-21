import React, { useState, useRef, useEffect } from "react";
import avatar from "../../assets/common/img_filter.svg";
import searchIcon from "../../assets/common/img_search.svg";
import style from "./UserAvatarWithFilters.module.css";
import CustomInput from "../Templates/Input/CustomInput";

const filters = [
  "Все посты",
  "Новые",
  "Старые",
  "Самые популярные",
  "Выборы",
  "Посты",
  "Бишкек",
  "Чуй",
  "Ош",
  "Иссык - Куль",
  "Джалал - Абад",
  "Талас",
  "Баткен",
];

export default function UserAvatarWithFilters() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={style.searchFilterRow} ref={ref}>
      <div className={style.filterWrap}>
        <img
          src={avatar}
          alt="filter"
          className={style.filterIcon}
          onClick={() => setOpen((v) => !v)}
        />
        {open && (
          <div className={style.filtersDropdown}>
            {filters.map((f, i) => (
              <button key={i} className={style.filterBtn}>
                {f}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* <CustomInput
        className="custom-input--search"
        style={{ width: "100%" }}
        placeholder="Что вы хотите найти?"
        searchIcon={<img src={searchIcon} alt="" />}
      /> */}
      <input
        type="text"
        className={style.custom_input__search}
        placeholder="Что вы хотите найти?"
      />
      <img src={searchIcon} alt="" />
    </div>
  );
}
