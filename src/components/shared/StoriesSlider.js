import React , {useContext} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import profileImage from '../../assets/7545.png';
import '@splidejs/react-splide/css';
import '../../style/slider.css'
import { apiContext } from '../../Context/ApiContextProvider';
import StorySide from './StorySide';

const StoriesSlider = () => {
    const userData = useContext(apiContext);

    return (
        <div className="my-2" >
           <Splide options={{
            perPage: 4,
            rewind : true,
            gap: '0rem'
        }}

        aria-label="My Favorite Images">
        <SplideSlide>
          <div className="my-story d-flex flex-column align-items-center ps-3">
            <img src={profileImage} alt="Image 1"/>
            <i className="bi bi-plus-circle-fill text-primary"></i>
            <p className="mb-0">your story</p>
          </div>
        </SplideSlide>
        {userData.map(user =>
        <SplideSlide>
            <StorySide userName={user.userName} image={user.image} />
        </SplideSlide>)}
           </Splide> 
        </div>
    );
};

export default StoriesSlider;