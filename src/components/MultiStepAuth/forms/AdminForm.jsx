import { useState } from "react";
import { FormWrapper } from "../FormWrapper.jsx";
import CustomInput from "../../Templates/Input/CustomInput.jsx";
import "../../Templates/Input/CustomInput.css";
import { useNavigate } from "react-router-dom";

export async function registerAdminUser(formDataObj) {
  try {
    const formData = new FormData();

    // Append all text fields
    formData.append("name", formDataObj.name);
    formData.append("idPassport", formDataObj.idPassport);
    formData.append("position", formDataObj.position);
    formData.append("organization", formDataObj.organization);
    formData.append("surname", formDataObj.surname);
    formData.append("password", formDataObj.password);
    formData.append("email", formDataObj.email);

    // Append files if they exist
    if (formDataObj.userUpsidePassportPhoto) {
      formData.append(
        "userUpsidePassportPhoto",
        formDataObj.userUpsidePassportPhoto
      );
    }
    if (formDataObj.userImage) {
      formData.append("userImage", formDataObj.userImage);
    }
    if (formDataObj.userPassportPhoto) {
      formData.append("userPassportPhoto", formDataObj.userPassportPhoto);
    }
    if (formDataObj.organizationDocument) {
      formData.append("organizationDocument", formDataObj.organizationDocument);
    }

    const response = await fetch(
      "https://votekg-1.onrender.com/auth/register/adminUser",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("[registerAdminUser] Server error details:", errData);
      throw new Error(errData.message || "Ошибка регистрации");
    }

    const data = await response.json();
    console.log("[registerAdminUser] Успех:", data);
    return data;
  } catch (error) {
    console.error("[registerAdminUser] Ошибка:", error);
    throw error;
  }
}

export function AdminForm({ onRegister, loading, error, success }) {
  const [form, setForm] = useState({
    name: "",
    idPassport: "",
    position: "",
    organization: "",
    surname: "",
    password: "",
    email: "",
    userUpsidePassportPhoto: null,
    userImage: null,
    userPassportPhoto: null,
    organizationDocument: null,
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
          label="Должность"
          name="position"
          type="text"
          value={form.position}
          required={true}
          onChange={handleChange}
          placeholder="Введите вашу должность"
        />
        <CustomInput
          label="Организация"
          name="organization"
          type="text"
          value={form.organization}
          required={true}
          onChange={handleChange}
          placeholder="Введите название организации"
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
          label="Фото лица"
          name="userImage"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите файл"
        />
        <CustomInput
          label="Фото ID-паспорта"
          name="userPassportPhoto"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите файл"
        />
        <CustomInput
          label="Документ организации"
          name="organizationDocument"
          type="file"
          required={true}
          onChange={handleFileChange}
          placeholder="Загрузите документ организации"
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
