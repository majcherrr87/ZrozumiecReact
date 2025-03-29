import { useState } from "react";
import styles from "./OldForm.module.css";

const BACK_END_URL = "http://localhost:3000";

export function OldForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`${BACK_END_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        comment,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Dodano komentarz: ", data);
        setName("");
        setComment("");
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isError && <p className={styles.error}>Bład zapisu</p>}
      <label>
        <p>Imię:</p>
        <input
          type="text"
          name="name"
          value={name}
          disabled={isLoading}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <p>Treść komentarza:</p>
        <textarea
          className={styles.textarea}
          name="comment"
          disabled={isLoading}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>

      <button className={styles.submitButton} disabled={isLoading}>
        {isLoading ? "Dodawanie..." : "Dodaj komentarz"}
      </button>
    </form>
  );
}
