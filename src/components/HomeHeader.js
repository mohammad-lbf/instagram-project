import React from 'react';
import {Link} from 'react-router-dom';
import instagramLogo from '../assets/Instagram_logo.svg.png';
import '../style/HomeHeader.css'
import HomeHeaderNavbar from './shared/HomeHeaderNavbar';
const HomeHeader = () => {
    return (
        // mobile home header
        <>
        <div className="w-100 home-header-container ">
        <div className="d-flex justify-content-between d-lg-none px-3 px-sm-5 py-2 align-items-center">
            <Link to="/direct"><i className="bi bi-send icon text-dark"></i></Link>
            <img className="logo" src={instagramLogo} />
        </div>
        {/* desktop home  header */}
        <div className="d-lg-flex align-items-center justify-content-between d-none py-2 home-header">
            <img className="logo" src={instagramLogo} />
            <div className="search-bar d-flex px-2 py-1 align-items-center">
                <i className={`bi bi-search search-icon text-secondary pe-2`}></i>
                <input type="text" placeholder="search" />
            </div>
            <HomeHeaderNavbar />
        </div>
        </div>
        
        </>
    );
};

export default HomeHeader;