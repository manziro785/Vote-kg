import { useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import global_style from "../../styles/layout_wrapper.module.css";
import style from "./CreatePosts.module.css";

const POST_TYPES = [
  { value: "vote", label: "Голосование" },
  //   { value: "survey", label: "Опрос" },
  { value: "regular", label: "Опрос" },
];

export default function CreatePosts() {
  const [postType, setPostType] = useState("vote");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainFile, setMainFile] = useState(null);
  const [answers, setAnswers] = useState([
    { title: "", description: "", file: null },
    { title: "", description: "", file: null },
  ]);

  const addAnswer = () => {
    setAnswers([...answers, { title: "", description: "", file: null }]);
  };

  const handleAnswerChange = (idx, field, value) => {
    setAnswers(
      answers.map((ans, i) => (i === idx ? { ...ans, [field]: value } : ans))
    );
  };

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
    if (e.target.value === "regular") {
      setAnswers([]);
    } else if (answers.length === 0) {
      setAnswers([
        { title: "", description: "", file: null },
        { title: "", description: "", file: null },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      postType,
      title,
      description,
      mainFile,
      answers,
    });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className={style.container_dashboard}>
          <form onSubmit={handleSubmit} className={style.form}>
            <h4>Создать пост</h4>

            <div className={style.field}>
              <label>
                Тип поста *
                <select
                  value={postType}
                  onChange={handlePostTypeChange}
                  required
                >
                  {POST_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <div className={style.field}>
                <label>
                  Название *
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Введите название"
                  />
                </label>
              </div>

              <div className={style.field}>
                <label>
                  Описание *
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Придумайте описание поста..."
                  />
                </label>
              </div>
            </div>
            {postType === "regular" ? (
              <div
                className={style.field}
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <label
                  className={style.fileBox}
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                  }}
                >
                  Выберите файл или перетащите его сюда
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setMainFile(e.target.files[0])}
                  />
                </label>
              </div>
            ) : (
              <div className={style.answers}>
                {answers.map((ans, idx) => (
                  <div key={idx} className={style.answer}>
                    <h5>Вариант ответа {idx + 1}</h5>
                    <div className={style.answerRow}>
                      <div className={style.answerFields}>
                        <div className={style.field}>
                          <label>
                            Название *
                            <input
                              type="text"
                              value={ans.title}
                              onChange={(e) =>
                                handleAnswerChange(idx, "title", e.target.value)
                              }
                              required
                              placeholder="Введите название"
                            />
                          </label>
                        </div>
                        <div className={style.field}>
                          <label>
                            Описание *
                            <textarea
                              value={ans.description}
                              onChange={(e) =>
                                handleAnswerChange(
                                  idx,
                                  "description",
                                  e.target.value
                                )
                              }
                              required
                              className={style.description}
                              placeholder="Придумайте описание варианта..."
                            />
                          </label>
                        </div>
                      </div>
                      <label className={style.fileBox}>
                        Выберите файл или перетащите его сюда
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleAnswerChange(idx, "file", e.target.files[0])
                          }
                        />
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className={style.addBtn}
                  onClick={addAnswer}
                >
                  + Добавить вариант ответа
                </button>
              </div>
            )}

            <button type="submit" className={style.submitBtn}>
              Создать пост
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
