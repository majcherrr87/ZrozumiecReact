"use client";
import { useState } from "react";
import styles from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  return (
    <>
      <p>Wybrana opcja: {selectedOption}</p>
      <select
        className={styles.languageSelector}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="PL">Polski</option>
        <option value="EN">Angielski</option>
      </select>
    </>
  );
};

export default LanguageSelector;
