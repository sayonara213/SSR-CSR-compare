import React, { useEffect, useState } from "react";
import styles from "./categories-list.module.scss";
import Button from "../../../components/button/button";
import { getCategories } from "../../../helpers/api";

const CategoriesList = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories([...categories, "random"]);
    };

    fetchCategories().catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.wrapper}>
      {categories.map((category: string) => (
        <Button
          key={category}
          category={category}
          onClick={() => console.log(123)}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
