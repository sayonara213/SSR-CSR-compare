import React from "react";

import styles from "./header.module.scss";
import { IMAGES } from "../../constants/images";
import { Paragraph } from "../paragraph/paragraph";
import { useTheme } from "../../hooks/theme";

export const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <img className={styles.icon} alt="logo" src={IMAGES.logo} />
        </div>
        <div className={styles.titleWrap}>
          <Paragraph size="md" weight="bold">
            Chuck Norris jokes
          </Paragraph>
        </div>
      </div>
      <div className={styles.toggleSwitch}>
        <label>
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </header>
  );
};
