import styles from "./Header.module.scss";
import logo from "../assets/images/logomycookchef.png"; 
import { useState } from "react";
import { HeaderXsMenu } from "./HeaderXsMenu";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
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
      <i onClick={()=> setShowMenu(true)} className={`fa-solid fa-bars ${styles.headerXs}`}></i>
      { showMenu && 
      <>
      <div onClick={() => setShowMenu(false)} className="calc"> </div>
      <HeaderXsMenu/>
      </>
      }
    </header>
  );
};
