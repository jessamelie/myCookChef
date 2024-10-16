import styles from "./Recipe.module.scss";

export const Recipe = ({title, image}) => {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="pancake" />
      </div>
      <div className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}>
        <h3 className="mb-10">{title}</h3>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
};
