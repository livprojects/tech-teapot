import * as React from 'react';

const Home = () => {
  return (
    <main>

    <Helmet>
      <title>Liv Audigane's portfolio</title>
      <meta charSet="utf-8" />
      <meta name="description" content="My name is Liv Audigane, I am a French journalist and web developer and this is my portfolio."/>
      <meta name="author" content="Liv Audigane"/>
      {/* Ajouter une balise meta pour la langue conditionnée au choix de la langue  */}
    </Helmet>
      
      <h1>Welcome to my portfolio!</h1>

    </main>
  )
}
export default Home;