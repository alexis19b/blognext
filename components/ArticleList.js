import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';


const ArticleList = ({ articulos }) => {
    return (
        <div className={articleStyles.grid}>

        {articulos.map((articulo) => (
            
            <ArticleItem articulo={articulo} />
            ))}
            
        </div>
    )
}

export default ArticleList;
