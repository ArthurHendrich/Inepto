import styles from './styles.module.scss';
import { GiClick } from 'react-icons/gi';
import { ActiveLink } from '../ActiveLink';


export function Header() {
  return(
    <header className={styles.Container}>
      <div className={styles.headerContent}>
        
        <div className={styles.headerItens}>
          <div className={styles.headerLogo}></div>

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
          <input type="text" value='teste' placeholder='procure...' />
          <GiClick className={styles.headerSearchIcon} />
        </div>
      </div>
    </header>    
  )
}