import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/7545.png';
// styles
import '../style/MobileFooter.css'
const MobileFooter = () => {
    return (
        <div className="d-flex flex-row-reverse justify-content-between px-3 px-sm-5 mobile-footer py-2 align-items-center d-lg-none">
            <Link to="/home"><i className={`bi bi-house-door icon  text-dark`}></i></Link>
            <Link to="/explore"><i className={`bi bi-search icon text-dark`}></i></Link>
            <Link to="/newpost"><i className={`bi bi-plus-square icon text-dark`}></i></Link>
            <Link to="/activity"><i className={`bi bi-heart icon text-dark`}></i></Link>
            <Link to="/profile"><img className="icon" src={profileImage} alt="profile-image" /></Link>
        </div>
    );
};

export default MobileFooter;