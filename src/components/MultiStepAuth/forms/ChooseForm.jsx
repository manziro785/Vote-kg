import Radio from "@mui/material/Radio";
import { FormWrapper } from "../FormWrapper.jsx";

export function ChooseForm({ setType, type, updateFields }) {
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    if (updateFields) {
      updateFields({ type: newType });
    }
  };

  return (
    <FormWrapper title="Этап 1">
      <div className="chsMain_block">
        <div className="chsInfo_block">
          <h2 className="chsBold">Выберите тип аккаунта</h2>
          <h2 className="chsNorm">
            Создаёте ли вы аккаунт гражданина или официального лица? Выберите
            подходящий тип, чтобы продолжить регистрацию.
          </h2>
        </div>
        <div className="chsRadio_block">
          <div className="chsRadio">
            <Radio
              checked={type === "Student"}
              onChange={handleTypeChange}
              value="Student"
              required
              name="radio-buttons"
              style={{
                color: "#7C94C7",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                textAlign: "start",
              }}
            >
              <h2
                className="chsBold"
                style={{ fontSize: "1.2rem", margin: "0" }}
              >
                Гражданин
              </h2>
              <h3 className="chsNorm" style={{ fontSize: "1rem" }}>
                Участвуйте в голосованиях и опросах, ставьте лайки и дизлайки,
                комментируйте инициативы официальных лиц
              </h3>
            </div>
          </div>
          <div className="chsRadio">
            <Radio
              checked={type === "Organization"}
              onChange={handleTypeChange}
              required
              value="Organization"
              name="radio-buttons"
              style={{
                color: "#7C94C7",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                textAlign: "start",
              }}
            >
              <h2
                className="chsBold"
                style={{ fontSize: "1.2rem", margin: "0" }}
              >
                Официальное лицо
              </h2>
              <h3 className="chsNorm" style={{ fontSize: "1rem" }}>
                Публикуйте идеи, предложения и инициативы. Общайтесь напрямую с
                гражданами, Будьте ближе к народу.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}
