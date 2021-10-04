import * as React from 'react';
import pic from '../../../images/IMG_8882.png';
import './profilepicture.css';

const ProfilePic = () => {
return (
    <div className='gridbox-profilepic'>
         <img className='gridbox-profilepic-img'src={pic} alt='Liv Audigane'></img> 
    </div>
)
}

export default ProfilePic;