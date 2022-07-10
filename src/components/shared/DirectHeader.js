import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/directHeader.css';

const DirectHeader = () => {
    return (
        <div>
            <div className="direct-header d-lg-none d-flex align-items-center justify-content-between px-2 py-2">
               <div className="d-flex align-items-center">
               <i className="bi bi-plus me-2 e-icon"></i>
               <i className="bi bi-camera-video e-icon"></i>
               </div> 
               <div className="d-flex align-items-center">
                   <span>mohammad_lbf</span>
                   <Link to="/home"><i className="bi bi-arrow-right ms-2 text-dark e-icon"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default DirectHeader;