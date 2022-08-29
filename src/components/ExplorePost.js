import React , {useState , useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EXPLORE_POSTS } from '../GraphQL/queries';
import blueTick from '../assets/360_F_350402828_y4tZGyZkQm01KIqx6y5RSsZ2gdmORL9F-removebg-preview.png';
import myImage from '../assets/7545.png';
import '../style/post.css';
const ExplorePost = () => {
    const {loading , data , error} = useQuery(GET_EXPLORE_POSTS);
    const {id} = useParams();
    const [currentPost , setCurrentPost] = useState({});

    useEffect(()=>{
        data ?
        setCurrentPost(data.explorePosts.find(post => post.id == id))
        : setCurrentPost({})
    } , [data])

    return (
        <div>
            <div>
                <div className="d-flex flex-row-reverse align-items-center px-3 py-1 border border-top-0 border-start-0 border-end-0">
                    <Link to="/explore">
                    <i className="bi bi-arrow-right ms-2 text-dark e-icon"></i>
                    </Link>
                    <span className="me-2">Explore</span>
                </div>
                {
                    data &&
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-10 p-0 col-lg-4">
                            <div className="post">
                    <nav className="d-flex align-items-center flex-row-reverse justify-content-between px-3 py-2">
                    <div className="d-flex align-items-center flex-row-reverse">
                    <img className="profile-image" src={currentPost.author.profileImage.url} alt="profile-image" />
                    <img className="blue-tick" src={blueTick} alt="blueTick" />
                    <p className="mb-0">{currentPost.author.userName}</p>
                    </div>
                    <div>
                    <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </nav>
                <img className="w-100" src={currentPost.postImage.url} alt="post" />
               </div>
                            </div>
                        </div> 
                    </div>
                    
                }
            </div>
        </div>
    );
};

export default ExplorePost;