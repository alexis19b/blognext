import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
        //Me permite cargadar todas las mega etiquetas para que se ejecute del lado del servidor
        // y los buscador las puedan leer
      <Html lang='es'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;