import React from "react";
import styles from "./FloatingWord.module.css";

const FloatingWord = ({ text, style }) => {
  return (
    <div className={styles.word} style={style}>
      {text}
    </div>
  );
};

export default FloatingWord;
