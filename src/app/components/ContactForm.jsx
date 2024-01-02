"use client"
import React from 'react'
import './contact.css'



const ContactForm= () => {

  
  return (
    <section className='contact_page'>
      <div className='carte_entreprise'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6159.0724115089415!2d3.106510818616488!3d49.53037514714615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29a8ded827512eff%3A0xdac6c0f8bfbd9757!2sCodeMeta%20Solutions!5e0!3m2!1sfr!2sfr!4v1703525162909!5m2!1sfr!2sfr"></iframe>
      </div>
      <section className='contact_section'>
      <aside className='aside_form'>
      <h3>- Comment me joindre ?</h3> 
      <h2>Coordonnées</h2>
      <div className='info_contact'>
      <img src='./images/house-solid.svg'></img>
      <p>SIEGE : <br></br> 650 rue Isidore de Pommery<br></br>60400C CUTS</p>
      </div>
      <div className='info_contact'>
      <img src='./images/envelope-solid.svg'></img>
      <p>EMAIL : codemetasolutions@gmail.com</p>
      </div>
      <div className='info_contact'>
      <img src='./images/phone-solid.svg'></img>
      <p>TEL : <br></br> 06.27.57.59.07</p>
      </div>
      <div className='info_contact'>
      <img src='./images/address-card-solid.svg'></img>
      <p>SIRET : <br></br>98234189300013</p>
      </div>
      </aside>
      <section className='forms'>
      <form className='form_content'>
    <div className='name'>
      <label htmlFor='name'></label>
      <input id='name' type='text' name='name' placeholder='Nom / Prénom' required></input>
    </div>
    <div className='email'>
          <label htmlFor='email'></label>
          <input autoComplete="email" id='email' type='email' name='email' placeholder='Email' required></input>
        </div>
    <div className='details'>
      <div className='telephone'>
        <label htmlFor='telephone'></label>
        <input id='telephone' type='text' name='telephone' placeholder='Téléphone' required></input>
      </div>
    </div>
        <div className='objet'>
        <label htmlFor="objet"></label>
        <input type="text" id="objet" name="objet" placeholder="Objet"></input>
        </div>
        <div className='besoin'>
          <label htmlFor='besoin'></label>
          <textarea id='besoin' rows="10" name='besoin' placeholder='Message' maxLength={1000}></textarea>
        </div>
        <button type='submit' className='form_button'>Envoyer</button>
      </form>
      </section>
      </section>
    </section>
  )
}

export default ContactForm