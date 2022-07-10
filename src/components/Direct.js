import React from 'react';
import '../style/direct.css'
import DirectHeader from './shared/DirectHeader';
import HomeHeader from './HomeHeader';
const Direct = () => {
    return (
        <div className="direct">
            <div className="d-lg-none">
                <DirectHeader />
            </div>
            <div className="d-none d-lg-flex">
                <HomeHeader/>
            </div>
            <div className="messages">
            <div className="direct-search-bar d-lg-none d-flex">
            <i class="bi bi-search"></i>
            <input type="text" placeholder="search" />
            </div>
                messages
            </div>
        </div>
    );
};

export default Direct;