"use client";

import React from "react";
import styles from "./categories-list.module.scss";
import Button from "@/components/global/button/button";
import { useAppDispatch } from "@/hooks/hooks";
import { fetchJoke } from "@/redux/actionCreator";

interface CategoriesListProps {
  categories: string[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
  const dispatch = useAppDispatch();

  const handleClick = (category: string) => {
    fetchJoke(dispatch, category);
  };

  return (
    <div className={styles.wrapper}>
      {categories.map((category: string) => (
        <Button
          key={category}
          category={category}
          onClick={() => handleClick(category)}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
