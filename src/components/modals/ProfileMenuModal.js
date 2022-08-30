import React from 'react';

const ProfileMenuModal = () => {
    return (
        <div>
            <div className="modal fade" id="ProfileMenuModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body py-0">
                        
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-gear-wide me-2"></i>
                            <p className="mb-0">Settings</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-clock-history me-2"></i>
                            <p className="mb-0">Your activity</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-archive me-2"></i>
                            <p className="mb-0">Archive</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-qr-code-scan me-2"></i>
                            <p className="mb-0">QR code</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-bookmark me-2"></i>
                            <p className="mb-0">Saved</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-list-stars me-2"></i>
                            <p className="mb-0">Close Friends</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-heart-pulse me-2"></i>
                            <p className="mb-0">COVID-19 Information Center</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMenuModal;