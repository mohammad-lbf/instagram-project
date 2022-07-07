import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/7545.png';
import '../../style/HomeHeaderNavbar.css'
const HomeHeaderNavbar = () => {
    return (
        <div className="d-flex justify-content-center flex-row-reverse align-items-center">
            <Link to="/home"><i className={`bi bi-house-door icon  ps-4 text-dark`}></i></Link>
            <Link to="/explore"><i className={`bi bi-search icon text-dark ps-4`}></i></Link>
            <Link to="/newpost"><i className={`bi bi-plus-square icon text-dark ps-4`}></i></Link>
            <Link to="/activity"><i className={`bi bi-heart icon text-dark ps-4`}></i></Link>
            <Link to="/direct"><i className="bi bi-send icon text-dark ps-4"></i></Link>
            <Link to="/profile"><img className="icon" src={profileImage} alt="profile-image ps-4" /></Link>
        </div>
    );
};

export default HomeHeaderNavbar;