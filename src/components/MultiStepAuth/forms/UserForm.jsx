import { useState } from "react";
import { FormWrapper } from "../FormWrapper.jsx";
import CustomInput from "../../Templates/Input/CustomInput.jsx";
import "../../Templates/Input/CustomInput.css";
import { useNavigate } from "react-router-dom";

export async function registerVoterUser(formDataObj) {
  try {
    const formData = new FormData();

    // Append all text fields
    formData.append("name", formDataObj.name);
    formData.append("idPassport", formDataObj.idPassport);
    formData.append("district", formDataObj.district);
    // Приводим дату к формату yyyy-MM-dd
    let dateOfBirth = formDataObj.dateOfBirth;
    if (dateOfBirth) {
      // Если дата в формате yyyy-MM-dd, оставляем как есть, иначе преобразуем
      const date = new Date(dateOfBirth);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth) && !isNaN(date)) {
        dateOfBirth = date.toISOString().slice(0, 10);
      }
    }
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("surname", formDataObj.surname);
    formData.append("password", formDataObj.password);
    formData.append("email", formDataObj.email);

    // Append files if they exist
    if (formDataObj.userUpsidePassportPhoto) {
      console.log(
        "userUpsidePassportPhoto file:",
        formDataObj.userUpsidePassportPhoto
      );
      formData.append(
        "userUpsidePassportPhoto",
        formDataObj.userUpsidePassportPhoto
      );
    }
    if (formDataObj.userImage) {
      console.log("userImage file:", formDataObj.userImage);
      formData.append("userImage", formDataObj.userImage);
    }
    if (formDataObj.userPassportPhoto) {
      console.log("userPassportPhoto file:", formDataObj.userPassportPhoto);
      formData.append("userPassportPhoto", formDataObj.userPassportPhoto);
    }

    // Log all form data entries
    console.log("All form data entries:");
    for (let pair of formData.entries()) {
      console.log(
        pair[0] + ": " + (pair[1] instanceof File ? pair[1].name : pair[1])
      );
    }

    const response = await fetch(
      "https://votekg-1.onrender.com/auth/register/voterUser",
      {
        method: "POST",
        body: formData,
        // Don't set Content-Type header - browser will set it automatically with boundary
      }
    );

    // Log response headers
    console.log(
      "Response headers:",
      Object.fromEntries(response.headers.entries())
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("[registerVoterUser] Server error details:", errData);
      throw new Error(errData.message || "Ошибка регистрации");
    }

    const data = await response.json();
    console.log("[registerVoterUser] Успех:", data);
    return data;
  } catch (error) {
    console.error("[registerVoterUser] Ошибка:", error);
    throw error;
  }
}

export function UserForm({ onRegister, loading, error, success }) {
  const [form, setForm] = useState({
    name: "",
    idPassport: "",
    district: "",
    dateOfBirth: "",
    surname: "",
    password: "",
    email: "",
    userUpsidePassportPhoto: null,
    userImage: null,
    userPassportPhoto: null,
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

  return (
    <FormWrapper title="Регистрация избирателя">
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
          label="ФИО"
          name="name"
          type="text"
          value={form.name}
          required={true}
          onChange={handleChange}
          placeholder="Введите своё полное имя"
        />
        <CustomInput
          label="Электронная почта"
          name="email"
          type="email"
          value={form.email}
          required={true}
          onChange={handleChange}
          placeholder="Введите свою почту"
        />
        <CustomInput
          label="Пароль"
          name="password"
          type="password"
          value={form.password}
          required={true}
          onChange={handleChange}
          placeholder="Придумайте пароль"
        />
        <CustomInput
          label="ID паспорта"
          name="idPassport"
          type="text"
          value={form.idPassport}
          required={true}
          onChange={handleChange}
          placeholder="Введите ID паспорта"
        />
        <CustomInput
          label="Область (district)"
          name="district"
          type="text"
          value={form.district}
          required={true}
          onChange={handleChange}
          placeholder="Введите область"
        />
        <CustomInput
          label="Дата рождения"
          name="dateOfBirth"
          type="date"
          value={form.dateOfBirth}
          required={true}
          onChange={handleChange}
          placeholder="Введите дату рождения"
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
          label="Фото ID-паспорта (верхняя сторона)"
          name="userUpsidePassportPhoto"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите файл"
        />
        <CustomInput
          label="Фото лица (userImage)"
          name="userImage"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите файл"
        />
        <CustomInput
          label="Фото ID-паспорта (userPassportPhoto)"
          name="userPassportPhoto"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите файл"
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
