import Head from "next/head";

import styles from "../styles/home.module.scss";

import { IoMailSharp } from 'react-icons/io5';
import { getPrismicClient } from "../services/prismic";
import { GetStaticProps } from "next";

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { useState } from "react";


import { Recentpost } from "../components/recentPost";


type Post = {
  slug: string;
  title: string;
  cover: string;
  description: string;
  updatedAt: string;
}

interface PostProps{
  posts: Post[];
}


export default function Home({ posts }: PostProps) {


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
            <Recentpost posts={undefined} />
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
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'post'),
  ], {
    orderings: '[document.last_publication_date desc]',
    fetch: ['post.title', 'post.description', 'post.cover'],
    pageSize: 3,
  })

  const posts = response.results.map( post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description: post.data.description.find(content => content.type === 'paragraph')?.text ?? '',
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })


  return {
    props: {
      posts,
      page: response.page,
      totalPage: response.total_pages
    },
    revalidate: 60 * 30 // 30 minutes
  }
}