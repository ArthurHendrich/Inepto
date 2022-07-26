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

        <div className={styles.headerSearch}>
        <input
        className="border-normal-text focus:outline-none border border-solid
                    box-border w-full rounded-lg
                    text-normal-text text-sm p-2
                    dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
        placeholder="Search blog posts (this is a work in progress - pls report any bugs!)"
        type="text" value='teste' />
        </div>
      </div>
    </header>    
  )
}