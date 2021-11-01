import {
  React, 
  useState, 
  } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
    } from "react-router-dom";
import '../../styles/reset.css';
import '../../styles/style.css';
import ProfilePic from '../tools/profile-picture/profilepicture';
import Laboratory from './laboratory/laboratory';
import Archives from '../journalism/portfolio-articles';
import Welcome from './welcome/welcome';

import Navigation from '../tools/navigation/navigation';
import Shortcuts from '../tools/shortcuts/shortcuts';
import Toggle from '../tools/toggle';
import { withNamespaces } from 'react-i18next';

const Home = ({t}) => {

const [isLabActive, setIsLabActive] = useState(false);
const [isArchivesActive, setIsArchivesActive] = useState(false);

const changeActiveElement = () => {
  setIsLabActive(!isLabActive);
  setIsArchivesActive(!isArchivesActive);
}


  return (
    <Router>

    <main>  
      <Toggle t={t}></Toggle>

      <div className="gridbox">
        <ProfilePic></ProfilePic>
        <Shortcuts></Shortcuts>

        <Navigation t={t} isLabActive={isLabActive} isArchivesActive={isArchivesActive} changeActiveElement={changeActiveElement}></Navigation>
        <Switch>
          <Route path="/">
            <Welcome t={t}/>
          </Route>
          <Route path="/laboratory">
            <Laboratory t={t}></Laboratory>
          </Route>
          <Route path="/archives">
           <Archives t={t}></Archives>
          </Route>       
        </Switch>

        {/* ONCLICK -> Display CV 
        ONCLICK -> Contact form */}
      </div>

    </main>
    </Router>


  )
}
export default withNamespaces()(Home);
