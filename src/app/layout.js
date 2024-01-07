import './globals.css'
import React from 'react';
import Metadata from './metadata';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Metadata
        title="CodeMeta Solutions"
        description="Découvrez les services de développement frontend de CodeMeta Solutions. Nous créons des expériences web exceptionnelles pour nos clients."
        keywords="développement frontend, sites web interactifs, conception UI/UX, SEO, débogage"
      />
      <body>{children}</body>
    </html>
  );
}