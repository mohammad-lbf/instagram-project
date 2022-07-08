import React , {createContext} from 'react';
import {posts} from '../services/postsApi';

const PostsContextsProvider = (props) => {
    const postsContext = createContext();

    return (
        <postsContext.Provider value={posts}>
            {props.children}
        </postsContext.Provider>
    );
};

export default PostsContextsProvider;