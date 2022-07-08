import React , {createContext} from 'react';
import {posts} from '../services/postsApi';

export const postsContext = createContext();

const PostsContextsProvider = (props) => {
    return (
        <postsContext.Provider value={posts}>
            {props.children}
        </postsContext.Provider>
    );
};

export default PostsContextsProvider;