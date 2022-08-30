import React from 'react';
import MyImage from '../../assets/7545.jpg'
const ChangeAccountModal = () => {
    return (
        <div>
            <div className="modal fade" id="ChangeAccountModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body py-0 px-1">
                        
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <img alt="profile" style={{width:"50px"}} src={MyImage} />
                            <p className="mb-0 fs-13">mohammad_lbf</p>
                        </div>
                        <div className="d-flex py-2 justify-content-start w-100 border border-top-0 border-start-0 border-end-0 align-items-center">
                            <i style={{fontSize:"30px"}} className="bi bi-plus-circle-dotted me-2 ms-2"></i>
                            <p className="mb-0 fs-13">Add account</p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeAccountModal;