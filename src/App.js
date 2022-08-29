import React , {useContext} from 'react';
import { Navigate, Route, Routes , useLocation } from 'react-router-dom';
import Direct from './components/Direct';
import ExplorePost from './components/ExplorePost';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import Activity from './components/main pages/Activity';
import Explore from './components/main pages/Explore';
import NewPostModal from './components/main pages/NewPostModal';
import Profile from './components/main pages/Profile';
import MobileFooter from './components/MobileFooter';
// context
import ApiContextProvider , {apiContext} from './Context/ApiContextProvider';
import PostsContextsProvider from './Context/PostsContextsProvider';

const App = () => {
  const userData = useContext(apiContext);
  const {pathname} = useLocation();
  return (
  <ApiContextProvider>
    <PostsContextsProvider>
    <HomeHeader path={pathname} />
        <Routes>
            <Route path="/*"      element={<Navigate to="/home" />} />
            <Route path="/home"   element={<><Home /></>}                />
            <Route path="/direct" element={<Direct />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore/:id" element={<ExplorePost />} />
        </Routes>
        <MobileFooter path={pathname} />
        <NewPostModal />
    </PostsContextsProvider>
  </ApiContextProvider>
  );
};

export default App;