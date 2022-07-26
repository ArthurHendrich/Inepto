import Head from "next/head";

import styles from "../styles/home.module.scss";

import { IoMailSharp } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <Head>
        <title>Direito Inepto</title>
      </Head>

      <main>
        <section className={styles.headerContainer}>
          <div className={styles.headerText}>
            <h1>BIBLIOTECA DE ARTIGOS</h1>
            <h2>
              Produção de artigos de forma simplificada para facilitar sua vida
              e construir conhecimento
            </h2>
          </div>
        </section>

        <section className={styles.inputContainer}>
          <h2>
            Entre para a nossa lista e receba conteúdos exclusivos e com
            prioridade
          </h2>
          <div className={styles.inputContent}>
            <div className={styles.ContentFake}>
              <IoMailSharp className={styles.mail}/>
              <input type="text" placeholder="Qual seu melhor email?" />
            </div>
              <button>Cadastrar Email</button>
          </div>
        </section>
      </main>
    </>
  );
}
