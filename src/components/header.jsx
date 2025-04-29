// Assets
import menuIcon from "../assets/svg/menu-icon.svg";
import logo from "../assets/images/medium-logo.png";

// Styles from components folder.
import styles from "../styles/components/header.module.scss";

// React
import { useState } from "react";

// Components
import Link from "./Link.jsx";

// Local const
const PATHNAME_LIST = [
    "inicio",
    "transacciones",
    "clientes",
    "reseñas",
    "contacto",
];

// JSX
export default function Header() {
    const [currentPathname, setCurrentPathname] = useState(PATHNAME_LIST[0]);

    const handleClick = (pathname) => setCurrentPathname(pathname);

    return (
        <header className={styles.base}>
            <div className={styles.imageWrapper}>
                <img
                    src={logo.src}
                    alt="Medium logo"
                    className={styles.img}
                />
            </div>
            <nav className={styles.nav}>
                {PATHNAME_LIST.map((pathname) => (
                    <Link
                        key={pathname}
                        label={pathname}
                        ref={`/#${pathname}`}
                        onClick={handleClick}
                        isCurrentPathname={pathname === currentPathname}
                    />
                ))}
            </nav>
            <button className={styles.menuButton}>
                <img
                    alt="menu icon"
                    src={menuIcon.src}
                />
            </button>
        </header>
    );
}
