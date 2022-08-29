import React from 'react';
import { Link } from 'react-router-dom';
const Activity = () => {
    return (
        <div style={{paddingTop:"55px"}}>
            <div className="text-center">
            <i style={{fontSize:"100px"}} className="bi bi-activity"></i>
            <p>There is no recent activity</p>
            <Link to="/" className="text-decoration-none">return to home</Link>
            </div>
        </div>
    );
};

export default Activity;