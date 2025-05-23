import { useState } from "react";
import { useNavigate } from "react-router";
import { ConfirmForm } from "./forms/ConfirmForm";
import { ChooseForm } from "./forms/ChooseForm";
import { useMultistepForm } from "./hook/useMultistepForm";
import { UserForm, registerVoterUser } from "./forms/UserForm";
import { Container } from "@mui/material";

import "./MultiAuth.css";
import { LoginForm } from "./forms/LoginForm";
import { INITIAL_DATA, ORG_DATA } from "../../helpers/data";

function MultiStepAuth() {
  const navigate = useNavigate("");
  const [data, setData] = useState(INITIAL_DATA);
  const [dataOrg, setDataOrg] = useState(ORG_DATA);
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function updateFieldsOrg(fields) {
    setDataOrg((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <ChooseForm
        {...data}
        type={type}
        setType={setType}
        updateFields={updateFields}
      />,
      <UserForm
        onRegister={handleRegister}
        loading={loading}
        error={error}
        success={success}
      />,
      <ConfirmForm {...data} updateFields={updateFields} />,
    ]);

  async function handleRegister(form, setForm) {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      console.log("[MultiStepAuth] handleRegister данные:", form);
      await registerVoterUser(form);
      setSuccess("Регистрация успешна!");
      setForm({
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
      next();
    } catch (err) {
      setError(err.message || "Ошибка регистрации");
      console.error("[MultiStepAuth] Ошибка регистрации:", err);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    // На последнем шаге ничего не делаем, регистрация уже была
    navigate("/main");
  }

  return (
    <Container maxWidth="xl">
      <h1 style={{ textAlign: "center", margin: "0 0 2rem 0" }}>Регистрация</h1>
      <div className="mainBlock">
        <form onSubmit={onSubmit}>
          <div className="mainBlock_info">
            <div className="mainBlock_nav">
              {/* {currentStepIndex + 1} / {steps.length} */}
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 1 ? "#7C94C7" : "#35467a",
                }}
              ></div>
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 2 ? "#7C94C7" : "#35467a",
                }}
              ></div>
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 3 ? "#7C94C7" : "#35467a",
                }}
              ></div>
            </div>
            <div className="mainBlock_step">{step}</div>
          </div>
          <div className="mainBlock_contoller ">
            <button type="button" onClick={back} className="mainBlock_btn">
              Вернуться
            </button>
            <p className="mainBlock_already" onClick={() => navigate("/login")}>
              Уже есть аккаунт?
            </p>
            <button type="submit" className="mainBlock_btn">
              Продолжить
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default MultiStepAuth;
