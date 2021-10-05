import {React, useState} from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import ProfilePic from '../tools/profile-picture/profilepicture';
import Laboratory from './laboratory/laboratory';
import Archives from '../journalism/portfolio-articles';

import Navigation from '../tools/navigation/navigation';
import Shortcuts from '../tools/shortcuts/shortcuts';
import Toggle from '../tools/toggle';
import { withNamespaces } from 'react-i18next';

const Home = ({t}) => {

const [isLabActive, setIsLabActive] = useState(true);
const [isArchivesActive, setIsArchivesActive] = useState(false);

const changeActiveElement = () => {
  setIsLabActive(!isLabActive);
  setIsArchivesActive(!isArchivesActive);
}


  return (
<>
    <main>  
    <Toggle t={t}></Toggle>

      <div className="gridbox">
        <ProfilePic></ProfilePic>
        <Navigation t={t} isLabActive={isLabActive} isArchivesActive={isArchivesActive} changeActiveElement={changeActiveElement}></Navigation>
        <Shortcuts></Shortcuts>
        {isLabActive && <Laboratory t={t}></Laboratory>}
        {isArchivesActive && <Archives t={t}></Archives>}
      </div>

    </main>

    </>
  )
}
export default withNamespaces()(Home);
