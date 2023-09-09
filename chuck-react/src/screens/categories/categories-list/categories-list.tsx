import React, { useEffect, useState } from "react";
import styles from "./categories-list.module.scss";
import Button from "../../../components/button/button";
import { getCategories } from "../../../helpers/api";
import { useAppDispatch } from "../../../hooks/hooks";
import { fetchJoke } from "../../../redux/actionCreator";

const CategoriesList = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories([...categories, "random"]);
    };

    fetchCategories().catch((err) => console.log(err));
  }, []);

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
