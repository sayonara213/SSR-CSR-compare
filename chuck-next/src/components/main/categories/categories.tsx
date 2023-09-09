"use client";

import React from "react";

import styles from "./categories.module.scss";
import { Paragraph } from "@/components/global/paragraph/paragraph";
import CategoriesList from "./categories-list/categories-list";

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <Paragraph size="lg" weight="bold">
          Categories
        </Paragraph>
      </div>
      <CategoriesList categories={categories} />
    </div>
  );
};

export default Categories;
