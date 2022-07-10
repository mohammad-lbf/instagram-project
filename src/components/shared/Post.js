import React , {useState} from 'react';
import blueTick from '../../assets/360_F_350402828_y4tZGyZkQm01KIqx6y5RSsZ2gdmORL9F-removebg-preview.png'
import myImage from '../../assets/7545.png';
import '../../style/post.css';
const Post = ({state , data , dispatch}) => {

    let {id , like , save , describtion , profileImage , userName , likes , comments , image , time} = data;

    const [postSave , setPostSave] = useState(state.find(item => item.id == id).save)
    const [postLike , setPostLike] = useState(state.find(item => item.id == id).like)

    const likeClickHandler =()=>{
        dispatch({type:"LIKE" , payload:{data}});
        setPostLike(!(state.find(item => item.id == id).like))
    }
    const saveClickHandler = ()=>{
        dispatch({type:"SAVE" , payload:{data}});
        setPostSave(!(state.find(item => item.id == id).save)) 
    }
    
    return (
        <div className="post my-2 border rounded">
           <nav className="d-flex align-items-center flex-row-reverse justify-content-between px-3 py-2">
               <div className="d-flex align-items-center flex-row-reverse">
               <img className="profile-image" src={profileImage} alt="profile-image" />
               <img className="blue-tick" src={blueTick} alt="blueTick" />
               <p className="mb-0">{userName}</p>
               </div>
               <div>
               <i className="bi bi-three-dots-vertical"></i>
               </div>
           </nav>
           <div>
                {id === 4 ? 
                    <video className="w-100" controls>
                      <source src={image} type="video/mp4" />
                    </video>
                    : <img className="w-100" src={image} alt="post" />
                }
           </div>
            <nav className="d-flex align-items-center justify-content-between px-1 py-1">
                <div className="posts-btns d-flex align-items-center pe-1">
                    <div onClick={likeClickHandler}>
                        {postLike && <i className="text-danger ms-3 me-1 bi bi-heart-fill fs-3"></i>}
                        {postLike === false && <i className="ms-3 me-1 bi bi-heart fs-3"></i>}
                    </div>
                    <div><i className="ms-3 bi bi-chat fs-3"></i></div>
                    <div><i className="ms-3 bi bi-send fs-3"></i></div>
                </div>
                <div onClick={saveClickHandler}>
                    {postSave && <i className="ms-2 bi bi-bookmark-fill fs-3"></i>}
                    {postSave === false && <i className="ms-2 bi bi-bookmark fs-3"></i> }
                </div>
            </nav> 
            <div>
                <p className=" ps-3 mb-1">{Number(likes).toLocaleString()} Likes</p>
            </div>
            <div>
                <p className=" ps-3 fw-bold mb-1">{userName}</p>
            </div>
            <div>
                <p className=" ps-3 mb-1">{describtion}</p>
            </div>
            <div>
                <p className="text-secondary  ps-3 mb-1">see all {comments} comments</p>
            </div>
            <div className="d-flex align-items-center ps-3">
                <img className="my-image" src={myImage} alt="user-profile-image" />
                <p className="mb-0 text-secondary ps-1">add comment...</p>
            </div>
            <p className="post-time mt-2 ps-3">{time}</p>
        </div>
    );
};

export default Post;