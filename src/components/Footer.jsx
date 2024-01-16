import React from 'react'
import "./footer.css"
import Reseaux from './Reseaux'

const Footer = () => {
  return (
    <footer id='footer_contact'>
        <Reseaux />
        <section className='liens_footer'>
        <a href='/mentions_legales'>Mentions Légales</a>
        <a href='/cgv'>Conditions Générales de Ventes</a>
        <a href='/rgpd'>Politique de Confidentialité</a>
        </section>
        <img alt='logo footer' src='./images/logo-sansfond-petit.webp'></img>
    </footer>
  )
}

export default Footer