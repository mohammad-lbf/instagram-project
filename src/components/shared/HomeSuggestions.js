import React from 'react';
import profileImage from '../../assets/7545.png';
import '../../style/HomeSuggestions.css'
const HomeSuggestions = () => {
    return (
        <div className="d-none d-xl-flex flex-column align-items-center">
            <div className="d-xl-flex justify-content-between align-items-center d-none home-suggestions">
                <div className="d-flex">
                    <img src={profileImage} />
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <span>mohammad_lbf</span>
                        <span>MOHAMMAD</span>
                    </div>
                </div>
                <span className="text-primary">switch</span>
            </div>
            <div className="d-flex justify-content-between mt-3 p-1 text-secondary align-items-center w-100">
                <p>suggestions for you</p>
                <p style={{fontSize:"14px"}}>see all</p>
            </div>
            <div className="links p-1">
                <div>
                    <a className="text-decoration-none mx-1" href="https://about.instagram.com/">About</a>
                     .
                     <a className="text-decoration-none mx-1" href="">Help</a>
                     .
                     <a className="text-decoration-none mx-1" href="">Press</a>
                     .
                     <a className="text-decoration-none mx-1" href="">API</a>
                     .
                     <a className="text-decoration-none mx-1" href="">Jobs</a>
                     .
                     <a className="text-decoration-none mx-1" href="">Privacy</a>
                     .
                     <a className="text-decoration-none mx-1" href="">Terms</a>
                </div>
                <div>
                     <a className="text-decoration-none mx-1" href="">Locations</a>
                     .
                     <a className="text-decoration-none mx-1" href="">Language</a>
                </div>
            </div>
            <p className="gray-text">&copy; 2022 INSTAGRAM FROM META</p>
        </div>
    );
};

export default HomeSuggestions;