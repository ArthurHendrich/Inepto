import styled from "./styles.module.scss";

import Head from "next/head";
import { ActiveLink } from "../../components/ActiveLink";

export default function Category() {
  return (
    <>
      <Head>
        <title>Artigos | D.I</title>
      </Head>

      <main>
        <section className={styled.headerContent}>
          <div className={styled.headerText}>
            <ActiveLink href="/" activeClassName={styled.active}>
              <a>Artigos</a>
            </ActiveLink>
            <h1>/</h1>
            
            <ActiveLink href="/artigos" activeClassName={styled.active}>
              <a>Direito Penal</a>
            </ActiveLink>
          </div>
        </section>


        <section className={styled.contentContent}>
          <h1>Direito Penal</h1>
          <div className={styled.imageContent}>
            <img src="images/mulher.png" alt="Header Image" />
          </div>
        </section>

        <section className={styled.articlesContent}>
          <div className={styled.contentsContent}>
            <div className={styled.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>  
            <div className={styled.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
            <div className={styled.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
          </div>
          <div className={styled.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>  
            <div className={styled.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
            <div className={styled.contentItem}>
              <img src="images/imagemteste.png" alt="teste" />
              <time>jun 21, 2022</time>
              <h2>Como funciona o Artigo 157</h2>
              <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
              <span>Por Hendrich</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
