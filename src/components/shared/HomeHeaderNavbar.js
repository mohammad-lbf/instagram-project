import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/7545.png';
import '../../style/HomeHeaderNavbar.css'
const HomeHeaderNavbar = ({path}) => {
    return (
        <div className="d-flex justify-content-center flex-row-reverse align-items-center">
            <Link className="mx-3" to="/home"><i className={`bi ${path == "/home" ? "bi-house-door-fill" : "bi-house-door"} icon  text-dark `}></i></Link>
            <Link className="mx-3" to="/explore"><i className={`bi ${path == "/explore" ? "bi-search-heart-fill" : "bi-search"} icon text-dark`}></i></Link>
            <button className="btn border-0 p-0 mx-3" data-bs-toggle="modal" data-bs-target="#newPostModal" to="/newpost"><i className={`bi ${path == "/newpost" ? "bi-plus-square-fill" : "bi-plus-square"} icon text-dark`}></i></button>
            <Link className="mx-3" to="/activity"><i className={`bi ${path == "/activity" ? "bi-heart-fill" : "bi-heart"} icon text-dark`}></i></Link>
            <Link className="mx-3" to="/direct"><i className={`bi ${path === "/direct" ? "bi-send-fill" : "bi-send"} icon text-dark`}></i></Link>
            <Link className="mx-3" to="/profile"><img className={`icon ${path == "/profile" ? "border rounded-circle border-dark" : "border-0"}`} src={profileImage} alt="profile-image" /></Link>
        </div>
    );
};

export default HomeHeaderNavbar;