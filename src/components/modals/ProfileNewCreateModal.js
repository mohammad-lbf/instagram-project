import React from 'react';

const ProfileNewCreate = () => {
    return (
        <div>
            <div className="modal fade" id="ProfileNewCreateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body py-0">
                        <p className="mb-0 text-center py-1 fw-bold border border-top-0 border-start-0 border-end-0">create</p>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-camera-reels me-2"></i>
                            <p className="mb-0">Reel</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-grid-3x3 me-2"></i>
                            <p className="mb-0">Post</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-plus-circle-dotted me-2"></i>
                            <p className="mb-0">Story</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-bookmark-heart me-2"></i>
                            <p className="mb-0">Story Highlight</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-wifi me-2"></i>
                            <p className="mb-0">Live</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i className="bi bi-journal-medical me-2"></i>
                            <p className="mb-0">Guide</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileNewCreate;