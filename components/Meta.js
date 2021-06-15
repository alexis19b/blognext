import Head from "next/head";

const Meta = ({title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charset="UTF-8" />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
            
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Webdev Noticias blog',
    keywords: 'web, dev,programacion, nextjs, framework, libreria, javascript, react,',
    description: 'Obtenga las ultimas noticas del desarrollo web al instante'

}

export default Meta;
