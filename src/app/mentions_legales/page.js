import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MentionsLegales from '../../components/mentionsLegales'
import '../globals.css'

const mentions_legales = () => {
  return ( 
    <main className='mentions_legales_page'>
    <Header />
    <MentionsLegales />
    <Footer />    
    </main>
    
  )
}

export default mentions_legales