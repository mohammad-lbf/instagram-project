import React from 'react';
import StoriesSlider from './shared/StoriesSlider';
import '../style/Home.css'
import HomeSuggestions from './shared/HomeSuggestions';
const Home = () => {
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