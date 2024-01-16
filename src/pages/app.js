import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Votre Titre Global</title>
        <meta name="description" content="Description globale de l'application" />
        {/* Ajoutez d'autres balises meta globales au besoin */}
      </Head>

      <html lang="fr"> {/* Déclaration de la langue */}
        <body>
          <Component {...pageProps} />
        </body>
      </html>
    </>
  );
}

export default MyApp;