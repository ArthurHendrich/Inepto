import styles from "./styles.module.scss";
import { GiClick } from "react-icons/gi";
import { ActiveLink } from "../ActiveLink";
import { useState } from "react";



export function Header() {
  const [inputText, setInputText] = useState('');

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerItens}>
          <div className={styles.headerLogo}>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a>LOGO PICA</a>
            </ActiveLink>
          </div>

          <nav>
            <ActiveLink href="/" activeClassName={styles.active}>
              <a>Home</a>
            </ActiveLink>

            <ActiveLink href="/posts" activeClassName={styles.active}>
              <a>Artigos</a>
            </ActiveLink>

            <ActiveLink href="/sobre" activeClassName={styles.active}>
              <a>Quem somos?</a>
            </ActiveLink>
          </nav>
        </div>

        <div className={styles.headerSearch}>
          <input
            type="text"
            value="teste"
            placeholder="procure..."
            onChange={(e) => setInputText(e.target.value)}
          />
          <GiClick className={styles.headerSearchIcon}/>
        </div>
      </div>
    </header>
  );
}
