import * as React from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import ProfilePic from '../tools/profile-picture/profilepicture';
import Laboratory from './laboratory/laboratory';
import Navigation from '../tools/navigation/navigation';
import Shortcuts from '../tools/shortcuts/shortcuts';



const Home = () => {

  return (
<>
    <main>   
      <h1>Hi people</h1>
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
