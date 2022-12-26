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
import { withNamespaces } from 'react-i18next';

const Home = ({t}) => {

let location = useLocation();
let activeComponent = '';

activeComponent = location.pathname;


  return (

    <main>  
      <Toggle t={t}></Toggle>

      <div className="gridbox">
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
        </Switch>

        {/* ONCLICK -> Display CV 
        ONCLICK -> Contact form */}
      </div>

    </main>


  )
}
export default withNamespaces()(Home);
