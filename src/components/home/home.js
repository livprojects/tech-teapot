import * as React from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import ProfilePic from '../tools/profile-picture/profilepicture';
import Laboratory from './laboratory/laboratory';
import Navigation from '../tools/navigation/navigation';
import Shortcuts from '../tools/shortcuts/shortcuts';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n';



const Home = ({t}) => {


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
<>
    <main>  
    <div>
      <button onClick={() => changeLanguage('fr')}>fr</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <h1>{t('Welcome')}</h1>
    </div>

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
export default withNamespaces()(Home);
