import styles from './styles.module.scss';

import { GetStaticProps } from "next";

import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from "../../services/prismic";


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


export function Recentpost({ posts }) {
  
  return (
    <div className={styles.recentContent}>
      {posts.map((post) => (
        <div key={post.slug} className={styles.contentItem}>
          <img src={post.cover} alt="teste" />
          <time>{post.updatedAt}</time>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <span>Por Hendrich</span>
        </div>
      ))}
    </div>
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