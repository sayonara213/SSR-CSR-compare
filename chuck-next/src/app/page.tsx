import styles from "./page.module.css";
import { Header } from "@/components/global/header/header";
import Categories from "@/components/main/categories/categories";
import Joke from "@/components/main/joke/joke";
import { getCategories } from "@/helpers/api";

export default async function Home() {
  const fetchCategories = async () => {
    const categories = await getCategories();
    categories.push("random");
    return categories;
  };

  const categories = await fetchCategories();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Categories categories={categories} />
        <Joke />
      </main>
    </>
  );
}
