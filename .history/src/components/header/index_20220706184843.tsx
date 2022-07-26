import styles from './styles.module.scss';
import { GiClick } from 'react-icons/gi';


export function Header() {
  return(
    <header className={styles.Container}>
      <div className={styles.headerContent}>
        
        <div className={styles.headerItens}>
          <div className={styles.headerLogo}></div>

          <nav>
            <a>
              Home
            </a>
            <a>
              Artigos
            </a>
            <a>
              Empresa
            </a>
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