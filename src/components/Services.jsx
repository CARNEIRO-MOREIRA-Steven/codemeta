"use client"
import React, { useState, useEffect, useRef } from "react";
import './services.css';

const ServiceDetail = ({ id, title, description, aside }) => {
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const typeEffect = async () => {
      for (let i = 0; i <= title.length; i++) {
        setTypedText(title.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 150));
      }
    };

    typeEffect();

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observerRef.current.disconnect(); // Disconnect the observer once the section is visible
      }
    };

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      });
    }

    if (sectionRef.current && observerRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      setTypedText('');
    };
  }, [title]);

  return (
    <section ref={sectionRef} id={id} className={`service-detail ${isVisible ? 'visible' : ''}`}>
      <div className='service_texte'>
        <h2>{typedText}</h2>
        <section>
          {description}
        </section>
        {aside}
      </div>
    </section>
  );
};


const ServicesPage = () => {

  const services = [
    {
      title: 'Création de site',
      description: (
        <>
          <p className='creation_description'>
            Nous créons des sites web sur mesure en combinant une conception esthétique avec des fonctionnalités avancées.
            Notre approche commence par une analyse approfondie de vos objectifs commerciaux, suivie d'une conception personnalisée et d'un développement sur mesure.
            Que vous souhaitiez une vitrine en ligne, une plateforme e-commerce ou un site institutionnel, notre équipe est prête à concrétiser votre vision.
          </p>
          </>
      ), 
      aside : (
          <aside className="service_aside">
            <div>
          <h3>Fonctionnalités clés :</h3>
              <ul id="fonctionnalite">
                <li>Conception personnalisée</li>
                <li>Développement sur mesure</li>
                <li>Optimisation pour les moteurs de recherche (SEO)</li>
                <li>Intégration de fonctionnalités avancées</li>
                <li>Adaptation mobile (responsive design)</li>
                <li>Intégration de solutions de paiement sécurisées (pour les sites e-commerce)</li>
              </ul>
              </div>
              <div>
              <h3>Processus de travail :</h3>
              <ul>
                <li>Consultation initiale pour comprendre vos besoins</li>
                <li>Conception de maquettes et validation</li>
                <li>Développement et intégration des fonctionnalités</li>
                <li>Tests approfondis pour assurer la qualité</li>
                <li>Mise en ligne et suivi post-lancement</li>
              </ul>
              </div>   
              </aside>  
),
    },
    {
      title: 'Refonte',
      description: (
        <>
          <p className='service_description'>
            La refonte de votre site va au-delà de l'esthétique. Nous réalisons une analyse approfondie de votre site existant, identifiant les points forts
            et les domaines d'amélioration. Notre équipe de designers et de développeurs travaille ensuite à moderniser l'interface utilisateur,
            à optimiser la navigation et à intégrer les dernières fonctionnalités pour une expérience utilisateur exceptionnelle.
            La refonte est l'occasion de rester à la pointe des tendances et de répondre aux attentes changeantes de vos visiteurs.
          </p>
          </> ),
          aside: (
          <aside className="service_aside">
            <div>
          <h3>Fonctionnalités clés :</h3>
              <ul id="fonctionnalite">
                <li>Analyse approfondie du site existant</li>
                <li>Modernisation de l'interface utilisateur</li>
                <li>Optimisation de la navigation</li>
                <li>Intégration des dernières fonctionnalités web</li>
                <li>Adaptation mobile (responsive design)</li>
              </ul>
              </div>
              <div>
              <h3>Processus de travail :</h3>
              <ul>
                <li>Évaluation complète du site actuel</li>
                <li>Conception de nouvelles interfaces utilisateur</li>
                <li>Intégration de nouvelles fonctionnalités</li>
                <li>Tests rigoureux pour assurer la compatibilité</li>
                <li>Lancement avec suivi post-refonte</li>
              </ul>
              </div>   
              </aside>  
            
      ),
    },
    {
      title: 'Graphisme',
      description: (
        <>
          <p className='service_description'>
            Notre service de graphisme donne vie à votre identité de marque à travers des designs percutants. Nous ne nous contentons pas de créer des images
            attrayantes, mais nous sommes des artisans visuels qui soignent chaque détail. Du choix des couleurs à la typographie, chaque élément est pensé
            pour transmettre votre message de manière mémorable. Que vous ayez besoin d'un nouveau logo, de supports marketing ou d'éléments visuels pour votre site,
            notre équipe créative est prête à faire briller votre marque.
          </p>
          </>
      ),
      aside : (
          <aside className="service_aside">
          <div>
          <h3>Services graphiques :</h3>
              <ul>
                <li>Création de logo</li>
                <li>Conception de supports marketing (brochures, flyers, etc.)</li>
                <li>Éléments visuels pour site web (bannières, icônes, etc.)</li>
                <li>Choix et harmonisation des couleurs et de la typographie</li>
              </ul>
              </div> 
              </aside>    
      ) ,
    },
    {
      title: 'SEO',
      description: (
        <>
          <p className='service_description'>
            Notre service de référencement (SEO) est une approche complète pour améliorer votre classement sur les moteurs de recherche.
            À travers une analyse approfondie de votre site et de votre concurrence, nous optimisons chaque aspect, des balises méta au contenu,
            en passant par la structure du site. Notre objectif est de vous positionner en haut des résultats de recherche, attirant un trafic qualifié
            et augmentant la notoriété de votre marque.
          </p>
          </>
      ),
      aside: (
          <aside className="service_aside">
          <div>
          <h3>Fonctionnalités clés :</h3>
              <ul id="fonctionnalite">
                <li>Analyse approfondie du site et de la concurrence</li>
                <li>Optimisation des balises méta et du contenu</li>
                <li>Optimisation de la structure du site</li>
                <li>Recherche de mots-clés stratégiques</li>
                <li>Stratégies de backlinking</li>
              </ul>
              </div>
              <div>
              <h3>Résultats attendus :</h3>
              <ul>
                <li>Meilleur classement sur les moteurs de recherche</li>
                <li>Visibilité accrue en ligne</li>
                <li>Trafic qualifié augmenté</li>
              </ul>
              </div>  
            </aside>     
      ),
    },
    {
      title: 'Debogage',
      description: (
        <>
          <p className='service_description'>
            Les problèmes techniques peuvent rapidement entraver la performance de votre site web. Notre service de débogage est là pour identifier et
            résoudre rapidement ces problèmes, assurant un fonctionnement optimal. Que ce soit des erreurs de code, des problèmes de compatibilité ou des
            performances lentes, notre équipe technique intervient de manière efficace pour garantir une expérience utilisateur sans faille.
            La résolution rapide des problèmes techniques est cruciale pour maintenir la confiance de vos visiteurs et assurer la stabilité de votre site web.
          </p>
          </>
      ),
      aside:(
          <aside className="service_aside">
          <div >
          <h3>Problèmes courants que nous résolvons :</h3>
              <ul id="fonctionnalite">
                <li>Erreurs de code et de programmation</li>
                <li>Problèmes de compatibilité entre navigateurs</li>
                <li>Performances lentes du site</li>
                <li>Problèmes de sécurité</li>
              </ul>
              </div>
              <div>
              <h3>Avantages du service de débogage :</h3>
              <ul>
                <li>Site web plus rapide et réactif</li>
                <li>Réduction des erreurs et des interruptions</li>
                <li>Meilleure sécurité en ligne</li>
              </ul>
              </div>  
              </aside>     

      ),
    },
  ];

  return (
    <section className='services_page'>
      {services.map((service, index) => (
        <ServiceDetail
          key={index}
          id={service.title.toLowerCase().replace(/\s+/g, '-')}
          title={service.title}
          description={service.description}
          aside={service.aside}
        />
      ))}
    </section>
  );
};
export default ServicesPage;