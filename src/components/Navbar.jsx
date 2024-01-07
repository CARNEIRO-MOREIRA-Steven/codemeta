import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <ul className='navbar'>
            <li><Link href="/presentation">Présentation</Link></li>
            <li className='sous_menu'><p>Services</p>
            <ul className='sous_menu_inactif'>
            <li><Link href="/services#creation">Création de site</Link></li>
            <li><Link href="/services#refonte">Refonte</Link></li>
            <li><Link href="/services#graphisme">Graphisme</Link></li>
            <li><Link href="/services#seo">SEO</Link></li>
            <li><Link href="/services#debogage">Débogage</Link></li>
            </ul>
            </li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/realisations">Mes réalisations</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar