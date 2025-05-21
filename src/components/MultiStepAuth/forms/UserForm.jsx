import { useEffect } from "react";
import { FormWrapper } from "../FormWrapper.jsx";
import CustomInput from "../../Templates/Input/CustomInput.jsx";
import { options, optionsOrg } from "../../../helpers/option.js";
import "../../Templates/Input/CustomInput.css";

export function UserForm({
  // useData
  type,
  firstName,
  lastName,
  email,
  password,
  date,
  username,
  education,
  interests,
  updateFields,
  // orgData
  name,
  typeOfWork,
  emailOrg,
  passwordOrg,
  dataContactPerson,
  jobPosition,
  usernameOrg,
  number,
  socialLinks,
  reason,
  updateFieldsOrg,
}) {
  useEffect(() => {
    console.log(type);
  }, []);
  const handleInterestsChange = (selected) => {
    updateFields({ interests: selected });
  };

  return (
    <FormWrapper title="Этап 2">
      <div className="chsInfo_block">
        <h2 className="chsBold">Заполните данные для регистрации</h2>
        <h2 className="chsNorm">
          Заполните следующие поля, чтобы получить доступ к платформе
        </h2>
      </div>
      {type == "Student" ? (
        <div className="inputMain_block">
          <CustomInput
            label="ФИО"
            name="ФИО"
            type="text"
            value={name}
            required={true}
            onChange={(e) => updateFieldsOrg({ name: e.target.value })}
            placeholder="Введите своё полное имя"
          />
          <CustomInput
            label="Электронная почта "
            name="Электронная почта "
            type="email"
            value={emailOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ emailOrg: e.target.value })}
            placeholder="Введите свою почту"
          />
          <CustomInput
            label="Пароль"
            name="Пароль"
            type="password"
            value={passwordOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ passwordOrg: e.target.value })}
            placeholder="Придумайте пароль"
          />
          <CustomInput
            label="ID паспорта"
            name="ID паспорта"
            type="text"
            value={typeOfWork}
            required={true}
            onChange={(e) => updateFieldsOrg({ typeOfWork: e.target.value })}
            placeholder="Введите ID паспорта"
          />
          <CustomInput
            label="ИНН"
            name="ИНН"
            type="text"
            value={dataContactPerson}
            required={true}
            onChange={(e) =>
              updateFieldsOrg({ dataContactPerson: e.target.value })
            }
            placeholder="Введите свой ИНН"
          />
          <CustomInput
            label="Дата рождения"
            name="Дата рождения"
            type="date"
            value={jobPosition}
            required={true}
            onChange={(e) => updateFieldsOrg({ jobPosition: e.target.value })}
            placeholder="Введите Дата рождения"
          />
          <CustomInput
            label="Область"
            name="Область"
            type="select"
            options={optionsOrg}
            height="3.1rem"
            value={reason}
            required={true}
            onChange={(e) => updateFieldsOrg({ reason: e.target.value })}
            placeholder="Выберите Область"
          />
          <CustomInput
            label="Фото ID-паспорта (передняя сторона)"
            name="Фото ID-паспорта (передняя сторона)"
            type="file"
            required={true}
            placeholder="Выберите файл"
          />
          <CustomInput
            label="Фото ID-паспорта (задняя сторона)"
            name="Фото ID-паспорта (задняя сторона)"
            type="file"
            required={true}
            placeholder="Выберите файл"
          />
          <CustomInput
            label="Фото лица (фронтальное)"
            name="Фото лица (фронтальное)"
            type="file"
            required={true}
            placeholder="Выберите файл"
          />
        </div>
      ) : (
        <div className="inputMain_block">
          <CustomInput
            label="ФИО"
            name="ФИО"
            type="text"
            value={name}
            required={true}
            onChange={(e) => updateFieldsOrg({ name: e.target.value })}
            placeholder="Введите своё полное имя"
          />
          <CustomInput
            label="Электронная почта "
            name="Электронная почта "
            type="email"
            value={emailOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ emailOrg: e.target.value })}
            placeholder="Введите свою почту"
          />
          <CustomInput
            label="Пароль"
            name="Пароль"
            type="password"
            value={passwordOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ passwordOrg: e.target.value })}
            placeholder="Придумайте пароль"
          />
          <CustomInput
            label="ID паспорта"
            name="ID паспорта"
            type="text"
            value={typeOfWork}
            required={true}
            onChange={(e) => updateFieldsOrg({ typeOfWork: e.target.value })}
            placeholder="Введите ID паспорта"
          />
          <CustomInput
            label="ИНН"
            name="ИНН"
            type="text"
            value={dataContactPerson}
            required={true}
            onChange={(e) =>
              updateFieldsOrg({ dataContactPerson: e.target.value })
            }
            placeholder="Введите свой ИНН"
          />
          <CustomInput
            label="Дата рождения"
            name="Дата рождения"
            type="date"
            value={jobPosition}
            required={true}
            onChange={(e) => updateFieldsOrg({ jobPosition: e.target.value })}
            placeholder="Введите Дата рождения"
          />
          <CustomInput
            label="Должность"
            name="Должность"
            type="text"
            value={usernameOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ usernameOrg: e.target.value })}
            placeholder="Введите Должность"
          />
          <CustomInput
            label="Название учреждения"
            name="Название учреждения"
            type="text"
            value={socialLinks}
            required={true}
            onChange={(e) => updateFieldsOrg({ socialLinks: e.target.value })}
            placeholder="Введите название учреждения"
          />
          <CustomInput
            label="Область"
            name="Область"
            type="select"
            options={optionsOrg}
            height="3.1rem"
            value={reason}
            required={true}
            onChange={(e) => updateFieldsOrg({ reason: e.target.value })}
            placeholder="Выберите Область"
          />
          <CustomInput
            label="Фото ID-паспорта (передняя сторона)"
            name="Фото ID-паспорта (передняя сторона)"
            type="file"
            required={true}
            placeholder="Выберите файл"
          />
          <CustomInput
            label="Фото ID-паспорта (задняя сторона)"
            name="Фото ID-паспорта (задняя сторона)"
            type="file"
            required={true}
            placeholder="Выберите файл"
          />
          <CustomInput
            label="Фото лица (фронтальное)"
            name="Фото лица (фронтальное)"
            type="file"
            required={true}
            placeholder="Выберите файл"
          />
          <CustomInput
            label="Официальный документ / удостоверение (скан / фото)"
            name="Официальный документ / удостоверение (скан / фото)"
            type="file"
            required={true}
            placeholder="Выберите файл"
          />
        </div>
      )}
    </FormWrapper>
  );
}
