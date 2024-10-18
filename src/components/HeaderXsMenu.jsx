import styles from "./HeaderXsMenu.module.scss"

export const HeaderXsMenu = () => {
    return (
        <ul className={`${styles.menuContainer} card p-20`}>
            <li>wishlist</li>
            <li>connexion</li>
        </ul>
    );
}