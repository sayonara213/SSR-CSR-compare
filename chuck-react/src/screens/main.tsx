import React from "react";
import { Header } from "../components/header/header";

import styles from "./main.module.scss";
import Categories from "./categories/categories";

export const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Categories />
      </div>
    </>
  );
};
