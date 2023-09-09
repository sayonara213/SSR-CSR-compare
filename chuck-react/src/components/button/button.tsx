import React from "react";

import styles from "./button.module.scss";
import { Paragraph } from "../paragraph/paragraph";

interface ButtonProps {
  category: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ category, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <Paragraph weight="medium">{category}</Paragraph>
    </button>
  );
};

export default Button;
