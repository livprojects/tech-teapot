import * as React from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import ProfilePic from '../tools/profile-picture/profilepicture';
import Laboratory from './laboratory/laboratory';
import Navigation from '../tools/navigation/navigation';
import Shortcuts from '../tools/shortcuts/shortcuts';
import Toggle from '../tools/toggle';
import { withNamespaces } from 'react-i18next';

const Home = ({t}) => {



  return (
<>
    <main>  
    <Toggle t={t}></Toggle>

      <div className="gridbox">
        <ProfilePic></ProfilePic>
        <Navigation t={t}></Navigation>
        <Shortcuts></Shortcuts>
        <Laboratory t={t}></Laboratory>
      </div>

    </main>

    </>
  )
}
export default withNamespaces()(Home);
