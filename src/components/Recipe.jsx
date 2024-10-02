import styles from "./Recipe.module.scss";
import pancake from "../assets/images/pancake.jpg";

export const Recipe = () => {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={pancake} alt="pancake" />
      </div>
      <div className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}>
        <h3>Pancake</h3>
      </div>
    </div>
  );
};
