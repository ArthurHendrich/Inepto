import styles from './styles.module.scss';



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

        <div className={styles.headerSearch}></div>
      </div>
    </header>    
  )
}