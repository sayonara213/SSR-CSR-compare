import React from "react";
import { Header } from "../components/header/header";

import styles from "./main.module.scss";
import Categories from "./categories/categories";
import Joke from "./joke/joke";

export const Main = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Categories />
        <Joke />
      </div>
    </>
  );
};
