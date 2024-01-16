import React from 'react'
import Header from '@/components/Header'
import Rgpd from '@/components/rgpd'
import Footer from '@/components/Footer'
import '../globals.css'

const rgpd = () => {
  return ( 
    <main className='mentions_legales_page'>
    <Header />
    <Rgpd />
    <Footer />    
    </main>
    
  )
}

export default rgpd