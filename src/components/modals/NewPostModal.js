import React from 'react';

const NewPostModal = () => {
    return (
        <div>
          <div className="modal fade" id="newPostModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content" >
                 <div className="modal-header">
                   <p className="modal-title mb-0 fw-bold " id="exampleModalLabel">create new post</p>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body text-center mt-3">
                 <i style={{fontSize:"50px"}} className="bi bi-images"></i>
                 <p className="fs-5 mt-2">Drag photos and videos here</p>
                 <button className="btn btn-primary fs-13 mt-4" disabled>Select from device</button>
                 </div>
               </div>
             </div>
          </div>
        </div>
    );
};

export default NewPostModal;