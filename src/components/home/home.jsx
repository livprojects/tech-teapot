import {
  React
  } from 'react';
import {
    Routes,
    Route,
    useLocation
    } from 'react-router-dom';
import '../../styles/reset.css';
import '../../styles/style.css';
import ProfilePic from '../tools/profile-picture/profilepicture';
import Programming from './development/programming';
import Journalism from './journalism/portfolio-articles';
import Welcome from './welcome/welcome';

import Navigation from '../tools/navigation/navigation';
import Toggle from '../tools/translation-toggle';
import Lifeline from './lifeline/lifeline';
import { withTranslation } from 'react-i18next';

const Home = ({t}) => {

let location = useLocation();
let activeComponent = '';

activeComponent = location.pathname;


  return (
    <main>  
      <div className="main-container">
        <div className="header">
          <ProfilePic></ProfilePic>
          <div className="header-right">
            <div id="baseline">{t('home.baseline')}</div>
            <Toggle t={t}></Toggle>
          </div>
        </div>    

        <div className="flex-navigation">
          <Navigation t={t} activeComponent={activeComponent}></Navigation>
        </div>

        <Routes>
          <Route index element={<Welcome t={t}/>} />
          <Route path="/programming" element={<Programming t={t}/>} />
          <Route path="/journalism" element={<Journalism t={t}/>} />
          <Route path="/lifeline" element={<Lifeline/>} />
        </Routes>
      </div>

    </main>


  )
}
export default withTranslation()(Home);
