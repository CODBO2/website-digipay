// Assets
import logo from "../assets/medium-logo.png"
import menuIcon from "../assets/menu-icon.svg"

// Styles
import styles from "../styles/header.module.scss"

// React
import { useState } from "react";

// Local const
const PATH = ["inicio", "transacciones", "clientes", "reseñas", "contacto"];

function Link( { label = "label", onClick = ()=> {}, ref = "#", isActive = false } ) {
  return (
    <a 
      href={ref} 
      onClick={() => onClick(label)}
      className={`${styles.link} ${isActive && styles.linkIsActive} `} 
    >
      {label}
    </a>
  );
}

// JSX
export default function Header() {

    const [ currentLink, setCurrentLink ] = useState( PATH[ 0 ] )

    function handlerClick( target ) {
      setCurrentLink( target )
    }

    return (
      <header className={styles.base}>
        <div className={styles.imageWrapper}>
          <img className={styles.img} src={logo.src} alt="Medium logo" />
        </div>
        <nav className={styles.nav}>
          {PATH.map((target) => (
            <Link
              key={target}
              label={target}
              onClick={handlerClick}
              ref={`/#${target}`}
              isActive={target === currentLink}
            />
          ))}
        </nav>
        <button className={styles.menuButton}>
          <img src={menuIcon.src} alt="menu icon" />
        </button>
      </header>
    );
}