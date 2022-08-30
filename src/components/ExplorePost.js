import React , {useState , useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_EXPLORE_POSTS } from '../GraphQL/queries';

import '../style/post.css';

import blueTick from '../assets/360_F_350402828_y4tZGyZkQm01KIqx6y5RSsZ2gdmORL9F-removebg-preview.png';
import myImage from '../assets/7545.jpg';

const ExplorePost = () => {
    const {loading , data , error} = useQuery(GET_EXPLORE_POSTS);
    const {id} = useParams();
    const [currentPost , setCurrentPost] = useState({});
    const [postLike , setPostLike] = useState(false);
    const [postSave , setPostSave] = useState(false);
    const likeClickHandler = ()=>{
        setPostLike(!postLike);
    }
    const saveClickHandler = ()=>{
        setPostSave(!postSave)
    }
    useEffect(()=>{
        data ?
        setCurrentPost(data.explorePosts.find(post => post.id == id))
        : setCurrentPost({})
    } , [data]);
    const Div = styled.div`
    padding-bottom:50px;
    @media (min-width:992px){
        padding-top:60px;
        padding-bottom:10px;
    }
    
    `

    return (
        <Div>
            <div>
                <div className="d-flex flex-row-reverse align-items-center px-3 py-1 border border-top-0 border-start-0 border-end-0">
                    <Link className="text-center" to="/explore">
                    <i className="bi bi-arrow-right ms-2 text-dark e-icon"></i>
                    </Link>
                    <span className="me-2">Explore</span>
                </div>
                {
                    loading &&
                    <div className="spinner-border text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
                }
                {
                    currentPost.id &&
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-10 p-0 col-lg-4">
                            <div className="post border mt-2 rounded">
                    <nav className="d-flex align-items-center flex-row-reverse justify-content-between px-3 py-2">
                    <div className="d-flex align-items-center flex-row-reverse">
                    <img className="profile-image" src={currentPost.author.profileImage.url} alt="profile-image" />
                    <img className="blue-tick" src={blueTick} alt="blueTick" />
                    <p className="mb-0 fs-15">{currentPost.author.userName}</p>
                    </div>
                    <div>
                    <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </nav>
                <img className="w-100" src={currentPost.postImage.url} alt="post" />
                <nav className="d-flex align-items-center justify-content-between py-1">
                <div className="posts-btns d-flex align-items-center">
                    <div onClick={likeClickHandler}>
                        {postLike && <i className="text-danger ms-2 me-1 bi bi-heart-fill fs-5"></i>}
                        {postLike === false && <i className="ms-2 me-1 bi bi-heart fs-5"></i>}
                    </div>
                    <div><i className="ms-3 bi bi-chat fs-5"></i></div>
                    <div><i className="ms-3 bi bi-send fs-5"></i></div>
                </div>
                <div onClick={saveClickHandler}>
                    {postSave && <i className="me-2 bi bi-bookmark-fill fs-5"></i>}
                    {postSave === false && <i className="me-2 bi bi-bookmark fs-5"></i> }
                </div>
            </nav> 
            <div>
                <p className=" ps-2 fs-15 mb-1">{Number(currentPost.likes).toLocaleString()} Likes</p>
            </div>
            <div>
                <p className=" ps-2 fs-15 fw-bold mb-1">{currentPost.author.userName}</p>
            </div>
            <div>
                <p className=" ps-2 fs-15 mb-1">{currentPost.describtion}</p>
            </div>
            <div>
                <p className="text-secondary  ps-2 fs-15 mb-1">see all {currentPost.comments} comments</p>
            </div>
            <div className="d-flex align-items-center ps-2 fs-15">
                <img className="my-image rounded-circle" src={myImage} alt="user-profile-image" />
                <p className="mb-0 text-secondary ps-1 fs-13">add comment...</p>
            </div>
            <p className="post-time mt-2 ps-3">{currentPost.time}</p>
               </div>
                            </div>
                        </div> 
                    </div>
                    
                }
            </div>
        </Div>
    );
};

export default ExplorePost;