import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import styled from  'styled-components'

import { GET_EXPLORE_POSTS } from '../../GraphQL/queries';
import ExploreHeader from '../shared/ExploreHeader';

const Explore = () => {
    const Div = styled.div`
    padding-top:10px;
    background-color: rgb(250, 250, 250);
    min-height:100vh;
    #post-cover{
        width:95px;
        height:95px;
    }
    @media (min-width:400px){
        #post-cover{
            width:120px;
            height:120px;
        }
    }
    @media (min-width:992px){
        padding-top: 65px;
        #post-cover{
            width:150px;
            height:150px;
        }
    }
    @media(min-width:1200px){
        width: calc(100% - 28rem);
        margin:auto;
    }
    
    `
    const {loading , data , error} = useQuery(GET_EXPLORE_POSTS);
    return (
        <Div className="m-0 w-100">
            <ExploreHeader />
            <div className="mt-2">
                <div className="container bg-white border rounded py-2">
                       {
                          loading &&
                                <div className="text-center">
                                    <div className="spinner-border text-dark text-center" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                         }
                         {
                             error &&
                             <div className="text-center mt-2">
                                 <p>could not refresh feed</p>
                             </div>
                         }
                        {
                            data &&
                            <div className="row justify-content-center">
                                {
                                    data.explorePosts.map(post => <div key={post.id} className="col-4 p-0 m-1" style={{width:"fit-content"}}>
                                        <Link to={`/explore/${post.id}`}>
                                        <img id="post-cover" alt="post-cover"  src={post.postImage.url} />
                                        </Link>
                                    </div>)
                                }
                            </div>    
                        }
                    
                </div>
            </div>
        </Div>
    );
};

export default Explore;