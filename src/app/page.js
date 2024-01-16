import Header from '../components/Header'
import Banner from '../components/Banner'
import Entreprise from '../components/Entreprise'
import Footer from '../components/Footer'
import Projet from '../components/Projet'
import CookieBanner from '@/components/cookieBanner'
import '../app/globals.css'

export default function Home() {
  return (
    <main className='main'>
      <CookieBanner />
      <Header />
      <Banner />
      <Entreprise defer/>
      <Projet defer/>
      <Footer defer/>
    </main>
  )
}
