"use client"
import React, { useEffect, useState } from 'react'
import './mentionsLegales.css'


const mentionsLegales = () => {
  return (
    <section className='mentions_legales'>
      <h2>Mentions Légales</h2>
      <section className='mentions_legales_intro'>
      <h3>Entrée en vigueur au 01/01/2024</h3>
      <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique,
      dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l"Utilisateur", du site www.codemeta-solutions.com, ci-après le "Site",
      les présentes mentions légales.</p>
      <p>La connexion et la navigation sur le Site par l’Utilisateur implique l'acceptation intégrale et sans réserve des présentes mentions légales.
      Ces dernières sont accessibles sur le Site à la rubrique «Mentions légales».</p>
      </section>
      <section className='container_article'>
      <section className='article numero1'>
      <h3>ARTICLE 1 – L’EDITEUR</h3>
      <div className='article_description'>
      <p>L'édition du Site est assurée par CodeMeta Solutions, Entreprise Individuel immatriculée au Registre du Commerce et des Sociétés de Compiègne
        sous le numéro 982341893 dont le siège social est situé </p>
        <ul>
        <li>650 rue Isidore de Pommery, 60400 Cuts</li>
        <li>Adresse mail : codemetasolutions@gmail.com</li>
        </ul>
        <p>Le Directeur de la publication est CARNEIRO MOREIRA Steven ci-après l'Editeur</p>
        </div>
        </section>
        <section className='article numero2'>
      <h3>ARTICLE 2 – L’HEBERGEUR</h3>
      <div className='article_description'>
      <p>L'Hébergeur du Site de la société :</p>
      <ul>
        <li>Vercel Inc</li>
        <li>San Francisco</li>
        <li>États-Unis</li>
      </ul>
      </div>
      </section>
      <section className='article numero3'>
      <h3>ARTICLE 3 – ACCES AU SITE</h3>
      <div className='article_description'>
      <p>Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
        En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable.</p>
      </div>
      </section>
      <section className='article numero4'>
      <h3>ARTICLE 4 – COLLECTE DES DONNEES</h3>
      <div className='article_description'>
      <p>Le Site assure à l’Utilisateur une collecte et un traitement d’informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier
      1978 relative à l’informatique, aux fichiers et aux libertés.</p>
      <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l’Utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition
      de ses données personnelles. L’Utilisateur exerce ce droit :<br></br>
      par mail à l’adresse email : codemetasolutions@gmail.com <br></br>
      via un formulaire de contact.</p>
      <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée
      et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
      </div>
      </section>
      </section>
      <aside className='cgv'>
      <p className='texte_cgv'>Consultez nos <a className='lien_cgv' href='/cgv'>Conditions Générales de Vente (CGV)</a>
      pour obtenir des informations sur les termes et conditions applicables à l'achat de produits ou services sur ce site.</p>
      </aside>
    </section>
  )
}

export default mentionsLegales