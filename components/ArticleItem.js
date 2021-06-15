import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({articulo}) => {
    return (
        <Link href="/article/[id]" as={`/article/${articulo.id}`}>
            <a className={articleStyles.card}>
            <h3>{articulo.title} &rarr;</h3>
            <p>{articulo.body}</p>
            </a>
        </Link>
    )
}
export default ArticleItem;
