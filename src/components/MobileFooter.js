import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/7545.png';
// styles
import '../style/MobileFooter.css'
const MobileFooter = ({path}) => {
    return (
        <div className="d-flex flex-row-reverse justify-content-between px-3 px-sm-5 mobile-footer py-2 align-items-center d-lg-none">
            <Link to="/home"><i className={`bi ${path == "/home" ? "bi-house-door-fill" : "bi-house-door"} icon  text-dark `}></i></Link>
            <Link to="/explore"><i className={`bi ${path == "/explore" ? "bi-search-heart-fill" : "bi-search"} icon text-dark`}></i></Link>
            <Link to="/newpost"><i className={`bi ${path == "/newpost" ? "bi-plus-square-fill" : "bi-plus-square"} icon text-dark`}></i></Link>
            <Link to="/activity"><i className={`bi ${path == "/activity" ? "bi-heart-fill" : "bi-heart"} icon text-dark`}></i></Link>
            <Link to="/profile"><img className={`icon ${path == "/profile" ? "border rounded-circle border-dark" : "border-0"}`} src={profileImage} alt="profile-image" /></Link>
        </div>
    );
};

export default MobileFooter;