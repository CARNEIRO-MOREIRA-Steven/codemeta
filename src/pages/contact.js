import React from 'react'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import '../app/globals.css'

const Contact = () => {
    return (
        <div className='contact_page'>
          <Header />
          <ContactForm />
          <Footer />
          </div>
      )
}

export default Contact