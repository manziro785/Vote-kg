import { useState } from "react";
import { FormWrapper } from "../FormWrapper.jsx";
import CustomInput from "../../Templates/Input/CustomInput.jsx";
import "../../Templates/Input/CustomInput.css";
import { useNavigate } from "react-router-dom";

export async function registerVoterUser(formDataObj) {
  const formData = new FormData();
  // Append all text fields
  formData.append("name", formDataObj.name);
  formData.append("surname", formDataObj.surname);
  formData.append("email", formDataObj.email);
  formData.append("password", formDataObj.password);
  formData.append("idPassword", formDataObj.idPassword);
  formData.append("organization", formDataObj.organization);
  formData.append("position", formDataObj.position);
  formData.append("district", formDataObj.district);
  // Приводим дату к формату yyyy-MM-dd
  let dateOfBirth = formDataObj.dateOfBirth;
  if (dateOfBirth) {
    const date = new Date(dateOfBirth);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth) && !isNaN(date)) {
      dateOfBirth = date.toISOString().slice(0, 10);
    }
  }
  formData.append("dateOfBirth", dateOfBirth);
  // Append files if they exist
  if (formDataObj.userImage) {
    formData.append("userImage", formDataObj.userImage);
  }
  if (formDataObj.userPassportPhoto) {
    formData.append("userPassportPhoto", formDataObj.userPassportPhoto);
  }
  if (formDataObj.userUpsidePassportPhoto) {
    formData.append(
      "userUpsidePassportPhoto",
      formDataObj.userUpsidePassportPhoto
    );
  }
  if (formDataObj.certificate) {
    formData.append("certificate", formDataObj.certificate);
  }
  // Log all form data entries
  console.log("All form data entries:");
  for (let pair of formData.entries()) {
    console.log(
      pair[0] + ": " + (pair[1] instanceof File ? pair[1].name : pair[1])
    );
  }
  const response = await fetch(
    "https://votekg-1.onrender.com/auth/register/officialUser",
    {
      method: "POST",
      body: formData,
    }
  );
  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || "Ошибка регистрации");
  }
  const data = await response.json();
  return data;
}

export function UserForm({ onRegister, loading, error, success }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    idPassword: "",
    userImage: null,
    userPassportPhoto: null,
    userUpsidePassportPhoto: null,
    organization: "",
    position: "",
    certificate: null,
    district: "LEILEK",
    dateOfBirth: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleClick = async () => {
    if (onRegister) {
      try {
        const result = await onRegister(form, setForm);
        if (result) {
          navigate("/confirm_email");
        }
      } catch {
        // Ошибка уже обработана через error prop
      }
    }
  };

  // districts for select
  const districts = [
    "LEILEK",
    "BATKEN",
    "BISHKEK",
    "OSH",
    "JALAL-ABAD",
    "NARYN",
    "TALAS",
    "CHUI",
    "ISSYK-KUL",
  ];

  return (
    <FormWrapper title="Регистрация официального лица">
      {error && (
        <div style={{ color: "#e74c3c", marginBottom: 12, fontWeight: 600 }}>
          {error}
        </div>
      )}
      {success && (
        <div style={{ color: "#27ae60", marginBottom: 12, fontWeight: 600 }}>
          {success}
        </div>
      )}
      <div className="inputMain_block">
        <CustomInput
          label="Имя"
          name="name"
          type="text"
          value={form.name}
          required={true}
          onChange={handleChange}
          placeholder="Введите имя"
        />
        <CustomInput
          label="Фамилия"
          name="surname"
          type="text"
          value={form.surname}
          required={true}
          onChange={handleChange}
          placeholder="Введите фамилию"
        />
        <CustomInput
          label="Электронная почта"
          name="email"
          type="email"
          value={form.email}
          required={true}
          onChange={handleChange}
          placeholder="Введите почту"
        />
        <CustomInput
          label="Пароль"
          name="password"
          type="password"
          value={form.password}
          required={true}
          onChange={handleChange}
          placeholder="Введите пароль"
        />
        <CustomInput
          label="ID паспорта"
          name="idPassword"
          type="text"
          value={form.idPassword}
          required={true}
          onChange={handleChange}
          placeholder="Введите ID паспорта"
        />
        <CustomInput
          label="Фото лица"
          name="userImage"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите фото лица"
        />
        <CustomInput
          label="Фото паспорта (основная)"
          name="userPassportPhoto"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите фото паспорта"
        />
        <CustomInput
          label="Фото паспорта (верхняя сторона)"
          name="userUpsidePassportPhoto"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите верхнюю сторону паспорта"
        />
        <CustomInput
          label="Организация"
          name="organization"
          type="text"
          value={form.organization}
          required={true}
          onChange={handleChange}
          placeholder="Введите организацию"
        />
        <CustomInput
          label="Должность"
          name="position"
          type="text"
          value={form.position}
          required={true}
          onChange={handleChange}
          placeholder="Введите должность"
        />
        <CustomInput
          label="Сертификат"
          name="certificate"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите сертификат"
        />
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontWeight: 600, display: "block", marginBottom: 4 }}>
            Район (district) <span style={{ color: "#e74c3c" }}>*</span>
          </label>
          <select
            name="district"
            value={form.district}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4 }}
          >
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <CustomInput
          label="Дата рождения"
          name="dateOfBirth"
          type="date"
          value={form.dateOfBirth}
          required={true}
          onChange={handleChange}
          placeholder="Введите дату рождения"
        />
        <button
          type="button"
          disabled={loading}
          onClick={handleClick}
          style={{
            marginTop: 24,
            padding: "12px 0",
            fontWeight: 700,
            fontSize: "1.1rem",
            borderRadius: 8,
            background: "#7c94c7",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </div>
    </FormWrapper>
  );
}
