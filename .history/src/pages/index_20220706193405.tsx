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
        <img src="/images/headerImage.png" alt="Header Image" />
      </section>
      

    </main>

    </>
  )
}
