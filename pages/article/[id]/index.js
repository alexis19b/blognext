import Link from 'next/link';
import {useRouter} from 'next/router';
import articleStyles from '../../../styles/Article.module.css';
import Meta from '../../../components/Meta';

const article = ({ articulo }) => {
    // const router = useRouter();

    // const {id} = router.query

    return (
        <>
        <Meta title={articulo.title} />
          <h1>{articulo.title}</h1>
          <p>{articulo.body}</p>
          <br />
          <Link href='/'><button className={articleStyles.btn}>Regresar Atrás</button></Link>
        </>
    )
    
}

export const getServerSideProps = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const articulo = await res.json();

    return {
        props: {
            articulo
        }
    }
}

export default article;
