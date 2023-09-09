import React from "react";

import styles from "./categories.module.scss";
import { Paragraph } from "../../components/paragraph/paragraph";
import CategoriesList from "./categories-list/categories-list";

const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Paragraph>Categories</Paragraph>
      </div>
      <CategoriesList />
    </div>
  );
};

export default Categories;
