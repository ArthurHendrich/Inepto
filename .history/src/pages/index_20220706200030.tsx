import Head from 'next/head';

import styles from '../styles/home.module.scss';

export default function Home() {

  return (
    <>
    <Head>
      <title>Direito Inepto</title>
    </Head>


    <main>
      <section className={styles.headerContainer} >
        <div className={styles.headerText}>
          <h1>BIBLIOTECA DE ARTIGOS</h1>
          <h2>Produção de artigos de forma simplificada para facilitar sua vida e construir conhecimento</h2>
        </div>
        // <img src="/images/headerImage.png" alt="Header Image" />
      </section>
      
      <section className={styles.inputContainer}>
          <div>
            <h2>Entre para a nossa lista e receba conteúdos exclusivos e com prioridade</h2>
          </div>
          <div className={styles.inputContent}>
            <input type="text" placeholder="Qual seu melhor email?" />
            <button>Cadastrar email</button>
          </div>
      </section>
    </main>

    </>
  )
}
