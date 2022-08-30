import React , {useContext} from 'react';
import Post from './shared/Post';
import { postsContext } from '../Context/PostsContextsProvider';
import '../style/newPosts.css';

const NewPosts = () => {
    const newPosts = useContext(postsContext);
    return (
        <div className="new-posts">
            {newPosts.state.map(post => <Post key={post.id} data={post} state={newPosts.state} dispatch={newPosts.dispatch} />)}
        </div>
    );
};

export default NewPosts;