import Header from '../components/Header'
import Banner from '../components/Banner'
import Entreprise from '../components/Entreprise'
import Footer from '../components/Footer'
import Projet from '../components/Projet'
import CookieBanner from '@/components/cookieBanner'
import Head from 'next/head';
import '../app/globals.css'

export default function Home() {
  return (
    <main className='main'>
       {/* <Head>
       <title>CodeMeta Solutions</title>
       <meta name="description" content="Découvrez les services de développement frontend de CodeMeta Solutions. Nous créons des expériences web exceptionnelles pour nos clients." />
       <meta name="keywords" content="développement frontend, sites web interactifs, conception UI/UX, SEO, débogage" />
      </Head> */}
      <CookieBanner />
      <Header />
      <Banner />
      <Entreprise defer/>
      <Projet defer/>
      <Footer defer/>
    </main>
  )
}
