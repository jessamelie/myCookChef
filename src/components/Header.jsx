import styles from "./Header.module.scss";
import logo from "../assets/images/logomycookchef.png"; 

export const Header = () => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={logo} alt="logo my cook chef" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span> wishlist </span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
      <i className={`fa-solid fa-bars ${styles.headerXs}`}></i>
    </header>
  );
};
