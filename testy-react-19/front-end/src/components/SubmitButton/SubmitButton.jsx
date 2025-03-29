import { useFormStatus } from "react-dom";
import styles from "../NewForm/NewForm.module.css";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className={styles.submitButton}>
      {pending ? "Zapisuje" : "Zapisz"}
    </button>
  );
}
