import * as React from 'react';
import '../styles/reset.scss';
import '../styles/style.scss';
import { Helmet } from 'react-helmet';
import ProfilePic from '../components/profilepicture';
import Laboratory from './laboratory';
import Navigation from '../components/navigation';
import Shortcuts from '../components/shortcuts';

import favicon from '../images/teapot-icon.png';


const Home = () => {
  return (
<>
    <Helmet>
      <title>Liv Audigane's portfolio</title>
      <meta charSet="utf-8" />
      <meta name="icon" href={favicon} />
      <meta name="description" content="My name is Liv Audigane, I am a French journalist and web developer and this is my portfolio."/>
      <meta name="author" content="Liv Audigane"/>
      {/* Ajouter une balise meta pour la langue conditionnée au choix de la langue  */}
    </Helmet>
    <main>   
      <h1>Welcome to my portfolio!</h1>
      <div className="gridbox">
          <ProfilePic></ProfilePic>
        <Navigation></Navigation>
        <Shortcuts></Shortcuts>
        <Laboratory></Laboratory>
      </div>

    </main>

    </>
  )
}
export default Home;