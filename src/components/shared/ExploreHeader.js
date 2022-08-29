import React from 'react';

const ExploreHeader = () => {
    return (
        <div className="text-center d-lg-none">
            <div 
            style={{width:"300px" , backgroundColor:"rgb(239, 239, 239)" ,}}
            className="d-flex mx-auto px-2 py-1 rounded ">
            <i className="bi bi-search text-secondary"></i>
            <input style={{backgroundColor:"transparent" , outline:"none"}} className="border-0 ms-1 bg-0" type="text" placeholder="search" />
            </div>
        </div>
    );
};

export default ExploreHeader;