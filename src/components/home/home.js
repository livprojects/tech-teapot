import {
  React
  } from 'react';
import {
    Switch,
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
import Shortcuts from '../tools/navigation/shortcuts/shortcuts';
import Toggle from '../tools/translation-toggle';
import Lifeline from './lifeline/lifeline'
import { withNamespaces } from 'react-i18next';

const Home = ({t}) => {

let location = useLocation();
let activeComponent = '';

activeComponent = location.pathname;


  return (
    <main>  
      <div className="gridbox">
        <div className="sub-gridbox">
          <div id="baseline">{t('home.baseline')}</div>
          <Toggle t={t}></Toggle>
        </div>

        <ProfilePic></ProfilePic>        
        <Shortcuts t={t}></Shortcuts>

        <Navigation t={t} activeComponent={activeComponent}></Navigation>

        <Switch>
        <Route exact path="/">
            <Welcome t={t}/>
          </Route>
          <Route path="/programming">
            <Programming t={t}></Programming>
          </Route>
          <Route path="/journalism">
           <Journalism t={t}></Journalism>
          </Route>   
          <Route path="/lifeline">
           <Lifeline></Lifeline>
          </Route>       
        </Switch>
      </div>

    </main>


  )
}
export default withNamespaces()(Home);
