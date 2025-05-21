import "./registerPage.css";
import MultiStepAuth from "../../../components/MultiStepAuth/MultiStepAuth";
import authimg from "../../../assets/authimg.png";

export default function RegisterPage() {
  return (
    <div
      style={{
        backgroundColor: "#25325C",
        color: "white",
      }}>
      <img
        src={authimg}
        alt="error"
        style={{ position: "fixed", height: "100%" }}
        className="regImg"
      />
      <div
        style={{
          width: "55%",
          justifySelf: "flex-end",
          marginRight: "5%",
          paddingTop: "2rem",
        }}
        className="regPanel">
        <MultiStepAuth />
      </div>
    </div>
  );
}
