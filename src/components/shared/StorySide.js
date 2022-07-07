import React from 'react';
import { userNameShortener } from '../../helpers/functions';
import '../../style/storySlide.css'
const StorySide = ({userName , image}) => {
    return (
            <div className="my-story d-flex flex-column align-items-center ps-3 story-slide">
            <img src={image} alt="profile-image"/>
            <p className="mb-0">{userNameShortener(userName)}</p>
          </div>
    );
};

export default StorySide;