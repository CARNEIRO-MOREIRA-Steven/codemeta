"use client"
import React, { useState } from 'react';
import './cgv.css';

const CGV = () => {
    const [userEmail, setUserEmail] = useState('');
  
    const envoyerPDF = () => {
      // Vérifier que l'e-mail est renseigné
      if (!userEmail) {
        alert('Veuillez entrer votre e-mail.');
        return;
      }
  
      // Effectuer la requête vers le backend pour envoyer l'e-mail avec le PDF
      fetch('/api/sendPdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          attachPDF: true,
          userEmail: userEmail,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Traitez la réponse du backend comme vous le souhaitez
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi de l\'e-mail avec PDF:', error);
        // Gérez les erreurs ici
      });
    };
  
    return (
      <section className='cgv_page'>
        <section className='cgv_texte'>
          <h2>Conditions Générales de Vente (CGV)</h2>
          <p>Nous vous remercions de choisir nos services. Les Conditions Générales de Vente (CGV) régissent l'utilisation de notre site web et la fourniture
           de nos produits et services. En continuant à utiliser notre site et à acheter nos produits, vous acceptez les termes et conditions énoncés ci-dessous.</p>
           <a id='lien_pdf' alt="image page cgv" href='./cgv/CGV_CodeMeta_Solutions.pdf' defer>Ouvrir le PDF</a>
          <p>Vous souhaitez recevoir nos Conditions Générales de Ventes par email ?</p>
          <form id='emailForm_pdf'>
            <label htmlFor='userEmail_pdf'>Entrez votre e-mail :</label>
            <input
              type='email'
              id='userEmail_pdf'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <button type='button__envoie_pdf' onClick={envoyerPDF}>Envoyer le PDF par e-mail</button>
          </form>
        </section>
      <img className='cgv_image' src='./images/legal.jpg' alt='Image illustrative CGV' defer />
    </section>
  );
};

export default CGV;