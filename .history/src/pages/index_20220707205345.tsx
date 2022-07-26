import Head from "next/head";

import styles from "../styles/home.module.scss";

import { IoMailSharp } from 'react-icons/io5';
import { getPrismicClient } from "../services/prismic";
import { GetStaticProps } from "next";

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

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
          <img src="images/headerImage.png" alt="imagem" />
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
              <button>Cadastrar</button>
          </div>
        </section>

        <section className={styles.acessContainer}>
          <div className={styles.acessTitle}>
            Veja os nossos artigos mais acessados
          </div>
          <div className={styles.acessContent}>
            <div className={styles.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
            <div className={styles.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
            <div className={styles.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
          </div>
        </section>

        <section className={styles.recentContainer}>
          <div className={styles.recentTitle}>
            Veja os nossos artigos mais recentes
          </div>
          <div className={styles.recentContent}>
            <div className={styles.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
            <div className={styles.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
            <div className={styles.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
          </div>
        </section>

        <section className={styles.contentContainer}>
          <div className={styles.contentTitle}>
            TEM ALGUM CONTEUDO QUE VOCÊ DESEJA VER EM NOSSO SITE?
          </div>
          <input type="text" placeholder="Digite o nome do conteúdo" />
        </section>
      </main>
    </>
  );
}



export const getStaticProps: GetStaticProps = async () => {
  const primic = getPrismicClient()

  const response = await primic.query([
    Prismic.Predicates.at('document.type', 'ho')
  ])

  console.log(response.results[0].data)

  return {
    props: {

    },
    revalidate: 60 * 60 // 1 hour
  }
}