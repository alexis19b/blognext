
import ArticleList from '../components/ArticleList';


export default function Home({articulos}) {
  

  return (
    <div>

      <ArticleList articulos={articulos} />
      
    </div>
  )
}

export const getStaticProps = async () => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);

  const articulos = await res.json();

  return {
    props: {
      articulos
    }
  }

}