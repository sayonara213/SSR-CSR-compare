import React, { FC } from "react";
import styles from "./joke.module.scss";
import { IMAGES } from "../../constants/images";
import { Paragraph } from "../../components/paragraph/paragraph";

const Joke: FC = () => {
  const { joke, isLoading } = useAppSelector((store) => store.jokeReducer);

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={IMAGES.chuck} alt="joke" />
      </div>
      <div className={styles.jokeWrap}>
        {!isLoading && (
          <Paragraph size="md">
            {joke.value.length > 0 ? joke.value : "Select a category first!"}
          </Paragraph>
        )}
      </div>
    </div>
  );
};

export default Joke;
