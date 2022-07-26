import styled from "./styles.module.scss";

import Head from "next/head";
import { ActiveLink } from "../../components/ActiveLink";

import { getPrismicClient } from "../../services/prismic";
import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  cover: string;
  description: string;
  updatedAt: string;
};

interface PostProps {
  posts: Post[];
}

export default function Category({ posts }: PostProps) {
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
            {posts.map((post) => (
              <Link key={post.slug} href={`/artigos/${post.slug}`}>
                <a key={post.slug}>
                  <div className={styled.contentItem}>
                    <img src={post.cover} alt={post.title} />
                    <time>{post.updatedAt}</time>
                    <h2>{post.title}</h2>
                    <span>Por Hendrich</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "post")],
    {
      orderings: "[document.last_publication_date desc]",
      fetch: ["post.title", "post.description", "post.cover"],
      pageSize: 9,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description:
        post.data.description.find((content) => content.type === "paragraph")
          ?.text ?? "",
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};

<div className={styled.contentItem}>
  <img src="images/imagemteste.png" alt="teste" />
  <time>jun 21, 2022</time>
  <h2>Como funciona o Artigo 157</h2>
  <p>O artigo fala sobre quem é bandido tem que morrer e acabou taokay?...</p>
  <span>Por Hendrich</span>
</div>;
