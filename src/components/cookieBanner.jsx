"use client"
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './cookieBanner.css'

const CookieBanner = () => {
  const [cookieAccepted, setCookieAccepted] = useState(true);

  useEffect(() => {
    const isCookieAccepted = Cookies.get('cookieAccepted');
    if (!isCookieAccepted) {
      setCookieAccepted(false);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookieAccepted', 'true', { expires: 365 });
    setCookieAccepted(true);
  };

  const rejectCookies = () => {
    // Vous pouvez ajouter un traitement supplémentaire ici si nécessaire
    setCookieAccepted(true); // Pour masquer la bannière après le refus
  };

  return (
    <div className={`cookie-banner ${cookieAccepted ? 'hidden' : ''}`}>
      <p>
        Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant, vous acceptez notre utilisation des cookies.
      </p>
      <div>
      <button className='button_accept' onClick={acceptCookies}>Accepter les cookies</button>
      <button className='button_refus' onClick={rejectCookies}>Refuser les cookies</button>
      </div>
    </div>
  );
};

export default CookieBanner;