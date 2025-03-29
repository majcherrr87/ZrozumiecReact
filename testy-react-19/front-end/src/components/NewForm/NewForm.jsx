import { useActionState } from "react";
import styles from "./NewForm.module.css";
import { SubmitButton } from "../SubmitButton/SubmitButton";

const BACK_END_URL = "http://localhost:3000";

export function NewForm({ onSubmit, onResponse }) {
  function handleSubmit(previosState, formData) {
    const formState = {
      name: formData.get("name"),
      comment: formData.get("comment"),
    };

    if (formData.get("name").length === 0) {
      formState.nameError = true;
    }
    if (formData.get("comment").length === 0) {
      formState.commentError = true;
    }
    if (formState.nameError || formState.commentError) {
      return formState;
    } else {
      const newComment = {
        name: formData.get("name"),
        comment: formData.get("comment"),
      };
      onResponse((previosState) => [...previosState, newComment]);

      return fetch(`${BACK_END_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          comment: formData.get("comment"),
        }),
      })
        .then((res) => res.json())
        .then((comment) => {
          onSubmit((comments) => {
            return [...comments, comment];
          });
          return {};
        })
        .catch(() => {
          formState.formError = true;
          return formState;
        });
    }
  }
  const [state, formAction] = useActionState(handleSubmit, {});

  return (
    <form className={styles.form} action={formAction}>
      {state.formError && <p className={styles.error}>Bład zapisu servera</p>}
      {state.nameError && (
        <p className={styles.error}>Imię nie może być puste</p>
      )}
      <label>
        <p>Imię:</p>
        <input type="text" name="name" defaultValue={state.name} />
      </label>
      {state.commentError && (
        <p className={styles.error}>Komentarz nie może być puste</p>
      )}

      <label>
        <p>Treść komentarza:</p>
        <textarea
          className={styles.textarea}
          name="comment"
          defaultValue={state.comment}
        />
      </label>

      <SubmitButton />
    </form>
  );
}
