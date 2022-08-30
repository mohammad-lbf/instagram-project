import React from 'react';
import styled from 'styled-components';

import myImage from '../../assets/7545.jpg'


const Profile = () => {
    const Div = styled.div`
    @media (min-width:990px){
        padding-top:60px
    }
    @media(min-width:992px){
        width: calc(100% - 30rem);
        margin:auto;
    }
    @media(min-width:1200px){
        width: calc(100% - 40rem);
        margin:auto;
    }
    
    `
    return (
        <Div>
            <nav className="d-flex flex-row-reverse border border-top-0 px-2 py-2 border-start-0 border-end-0 align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <button className="p-0 me-2 btn border-0" data-bs-toggle="modal" data-bs-target="#ProfileNewCreateModal">
                    <i className="bi bi-plus-square icon"></i>
                </button>
                <button className="p-0 me-2 btn border-0" data-bs-toggle="modal" data-bs-target="#ProfileMenuModal">
                    <i className="bi bi-list icon"></i>
                </button>
            </div>
            <div>
                <button className="p-0 me-2 btn border-0" data-bs-toggle="modal" data-bs-target="#ChangeAccountModal">
                    <div className="d-flex flex-row-reverse align-items-center">
                        <i className="bi bi-chevron-down mt-1 ms-1"></i>
                        <p className="mb-0">mohammad_lbf</p>
                    </div>
                </button>
            </div>
            </nav>
            <div className="profile-body">
                <div className="d-flex align-items-center justify-content-between px-2 py-2">
                    <img alt="profile" style={{width:"80px"}} src={myImage} className="rounded-circle" />
                    <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center fs-13 mx-2">
                            <span>4</span>
                            <span>Posts</span>
                        </div>
                        <div className="d-flex flex-column align-items-center fs-13 mx-2">
                            <span>145</span>
                            <span>Followers</span>
                        </div>
                        <div className="d-flex flex-column align-items-center fs-13 mx-2">
                            <span>203</span>
                            <span>Following</span>
                        </div>
                    </div>
                </div>
                <div className="ms-2">
                    <p className="fw-bold fs-13 mb-1">-=*MOHAMMAD*=-</p>
                    <p className="fs-13 mb-1">بلند_آسمان_جایگاه_من_است#</p>
                    <p className="fs-13 mb-1">React-js developer</p>
                </div>
                <div className="w-100 text-center mt-3" >
                    <button className="btn btn-primary fs-13 py-1 mb-2" disabled style={{width:"300px"}}>
                        Edit profile
                    </button>
                </div>
                <div className="w-100 text-center">
                <i style={{fontSize:"40px"}} className="bi bi-lock"></i>
                <p className="mb-2">This Account is Private</p>
                <p className="fs-13 text-secondary">Follow this account to see their photos and videos.</p>
                <p className="py-2 bg-primary text-white fs-15">Created by mohammad labbafi</p>
                </div>
            </div>
        </Div>
    );
};

export default Profile;