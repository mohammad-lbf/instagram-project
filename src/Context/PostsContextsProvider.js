import React , {createContext , useReducer} from 'react';
import {posts} from '../services/postsApi';
export const postsContext = createContext();

const initialState = posts;
const postsReducer = (state , action) =>{
    switch (action.type){
        case "LIKE":
        const currentLikePostIndex = state.findIndex(item => item.id === action.payload.data.id);
        state[currentLikePostIndex].like = !(state[currentLikePostIndex].like);
        console.log(state[currentLikePostIndex])
        return state;
        case "SAVE":
            const currentSavePostIndex = state.findIndex(item => item.id === action.payload.data.id);
            state[currentSavePostIndex].save = !(state[currentSavePostIndex].save);
            console.log(state[currentSavePostIndex])
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