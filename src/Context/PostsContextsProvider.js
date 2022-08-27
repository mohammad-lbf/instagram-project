import React , {createContext , useReducer} from 'react';
import {posts} from '../services/postsApi';
export const postsContext = createContext();

const initialState = posts;
const postsReducer = (state , action) =>{
    switch (action.type){
        case "LIKE":
        const currentLikePostIndex = state.findIndex(item => item.id === action.payload.data.id);
        state[currentLikePostIndex].like = !(state[currentLikePostIndex].like);
        return state;
        case "SAVE":
            const currentSavePostIndex = state.findIndex(item => item.id === action.payload.data.id);
            state[currentSavePostIndex].save = !(state[currentSavePostIndex].save);
            return state;   
       
    }
} 

const PostsContextsProvider = (props) => {
    const [state , dispatch] = useReducer(postsReducer , initialState)
    return (
        <postsContext.Provider value={{state , dispatch}}>
            {props.children}
        </postsContext.Provider>
    );
};

export default PostsContextsProvider;