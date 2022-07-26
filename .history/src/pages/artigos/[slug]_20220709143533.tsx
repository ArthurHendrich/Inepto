import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from './post.module.scss';

import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import Image from 'next/image';


interface PostProps {
  post: {
    slug: string;
    title: string;
    description: string;
    cover: string;
    updatedAt: string;
  }
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title}| Bootcamp</title>
      </Head>

      <main>
        <div className={styles.ContainerPost}>
          <article className={styles.post}>
            <time>{post.updatedAt}</time>
            <h1>{post.title}</h1>
            <Image 
              quality={100}
              src={post.cover} 
              width={720} 
              height={410} 
              alt={post.title} 
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNUrAcAAMcAouVPGYoAAAAASUVORK5CYII="
              />
            <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.description }}></div>
          </article>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params}) => {
  const { slug } = params;
  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('post', String(slug), {});

  if(!response) {
    return{
      redirect: {
        destination: '/artigos',
        permanent: false
      }
    }
  }

  const post = {
    slug: slug,
    title: RichText.asText(response.data.title),
    description: RichText.asHtml(response.data.description),
    cover: response.data.cover.url,
    updatedAt: new Date(response.last_publication_date).toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    }
  }
}