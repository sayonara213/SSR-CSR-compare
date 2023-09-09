import React from "react";

import styles from "./header.module.scss";
import { IMAGES } from "../../constants/images";
import { Paragraph } from "../paragraph/paragraph";

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} alt="logo" src={IMAGES.logo} />
      </div>
      <div className={styles.titleWrap}>
        <Paragraph size="md" weight="bold">
          Chuck Norris jokes
        </Paragraph>
      </div>
    </header>
  );
};
