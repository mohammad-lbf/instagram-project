import React , {useContext} from 'react';
import StoriesSlider from './shared/StoriesSlider';
import '../style/Home.css'
import HomeSuggestions from './shared/HomeSuggestions';
import {postsContext} from '../Context/PostsContextsProvider';

const Home = () => {
    const posts = useContext(postsContext);
    return (
        <main className="home pt-3">
            <div className="home-container d-flex justify-content-between">
                <div className="posts-stories">
                <StoriesSlider />
                </div>
                <HomeSuggestions />
            </div>
        </main>
    );
};

export default Home;