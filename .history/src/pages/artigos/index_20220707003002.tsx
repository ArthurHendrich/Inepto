import styled from "./styles.module.scss";

import Head from "next/head";

export default function Category() {
  return (
    <>
      <Head>
        <title>Artigos | D.I</title>
      </Head>

      <main>
        <section className={styled.headerContent}>
          <div className={styled.headerText}>
            <h1>Artigo </h1>
            <p>/</p>
            <h2>Direito Penal</h2>
          </div>
        </section>


        <section className={styled.contentContent}>
          <h1>Direito Penal</h1>
          <div className={styled.imageContent}>
            <img src="images/mulher.png" alt="Header Image" />
          </div>
        </section>
      </main>
    </>
  );
}
