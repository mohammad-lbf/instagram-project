import React , {useContext} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import profileImage from '../../assets/7545.png';
import '@splidejs/react-splide/css';
import '../../style/slider.css';
import { apiContext } from '../../Context/ApiContextProvider';
import StorySide from './StorySide';

const StoriesSlider = () => {
    const userData = useContext(apiContext);

    return (
        <div className="py-2 border rounded story-slider" >
           <Splide options={{
            perPage: 4,
            rewind : false,
            gap: '0rem',
            pagination: false,
            padding:0,
            direction: 'rtl',
            arrows:true,
            breakpoints:{
              576:{perPage:4 , arrows:false},
              992:{perPage:5 , padding:10 , arrows:true},
              1200:{perPage:6,padding:30},
              1700:{perPage:6,padding:30}
            }
        }}

        aria-label="My Favorite Images">
        <SplideSlide>
          <div className="my-story d-flex flex-column align-items-center">
            <img src={profileImage} alt="Image 1"/>
            <i className="bi bi-plus-circle-fill text-primary"></i>
            <p className="mb-0">your story</p>
          </div>
        </SplideSlide>
        {userData.map(user =>
        <SplideSlide key={user.id}>
            <StorySide userName={user.userName} image={user.image} />
        </SplideSlide>)}
           </Splide> 
        </div>
    );
};

export default StoriesSlider;