import { useState } from "react";
import { ChooseForm } from "../../components/MultiStepAuth/forms/ChooseForm";
import { UserForm } from "../../components/MultiStepAuth/forms/UserForm";
import { AdminForm } from "../../components/MultiStepAuth/forms/AdminForm";
import { registerVoterUser } from "../../components/MultiStepAuth/forms/UserForm";
import { registerAdminUser } from "../../components/MultiStepAuth/forms/AdminForm";

export function Register() {
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (formData) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (type === "Student") {
        await registerVoterUser(formData);
      } else if (type === "Organization") {
        await registerAdminUser(formData);
      }
      setSuccess("Регистрация успешно завершена!");
      return true;
    } catch (err) {
      setError(err.message || "Произошла ошибка при регистрации");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    if (!type) {
      return <ChooseForm setType={setType} type={type} />;
    }

    if (type === "Student") {
      return (
        <UserForm
          onRegister={handleRegister}
          loading={loading}
          error={error}
          success={success}
        />
      );
    }

    if (type === "Organization") {
      return (
        <AdminForm
          onRegister={handleRegister}
          loading={loading}
          error={error}
          success={success}
        />
      );
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      {renderForm()}
    </div>
  );
}
