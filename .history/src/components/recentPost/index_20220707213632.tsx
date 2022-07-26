import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  cover: string;
  description: string;
  updatedAt: string;
}

interface PostProps{
  post: Post;
}


export function Recentpost({ post }: PostProps) {
  
  return (
    <div className={styles.recentContent}>
        <div key={post.slug} className={styles.contentItem}>
          <img src={post.cover} alt="teste" />
          <time>{post.updatedAt}</time>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <span>Por Hendrich</span>
        </div>
    </div>
  );
}




