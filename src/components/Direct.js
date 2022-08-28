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
            <div className="messages">
            <div className="direct-search-bar d-lg-none d-flex mx-auto px-2 py-1 py-lg-3">
            <i className="bi bi-search text-secondary"></i>
            <input className="border-0 ms-1" type="text" placeholder="search" />
            </div>
            <div>
                <div className="d-flex justify-content-between px-2 mt-1">
                    <p className="mb-0 fs-15 text-primary">Requests</p>
                    <p className="mb-0 fs-15">messages</p>
                </div>
                <div className="text-center mt-5">
                      <i class="bi bi-send fs-1 border rounded-circle px-3 py-2 border-dark"></i>
                    <p className="text-center fs-5 mt-4">Message friends with Direct </p>
                    <p className="text-secondary fs-13 text-center">Send private messages or share your favorite posts directly with friends</p>
                    <p className="fs-15 text-primary text-center">Send a message</p>
                </div>
            </div>

                
            </div>
        </div>
    );
};

export default Direct;