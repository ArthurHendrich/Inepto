import styled from './styles.module.scss';

import Head from "next/head";

export default function Category() {
  return (
    <>
      <Head>
        <title>Artigos | D.I</title>
      </Head>

      <main>
        <section className={styled.headerContent}>
          <h1>Direito Penal</h1>
          <img src='images/mulher.png' alt='Mulher' />
        </section>
      </main>
    </>
  )
}