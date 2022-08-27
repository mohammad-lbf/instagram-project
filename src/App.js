import React , {useContext} from 'react';
import { Navigate, Route, Routes , useLocation } from 'react-router-dom';
import Direct from './components/Direct';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import Activity from './components/main pages/Activity';
import Explore from './components/main pages/Explore';
import NewPost from './components/main pages/NewPost';
import Profile from './components/main pages/Profile';
import MobileFooter from './components/MobileFooter';
// context
import ApiContextProvider , {apiContext} from './Context/ApiContextProvider';
import PostsContextsProvider from './Context/PostsContextsProvider';

const App = () => {
  const userData = useContext(apiContext);
  const {pathname} = useLocation();
  console.log(pathname)
  return (
  <ApiContextProvider>
    <PostsContextsProvider>
        <Routes>
            <Route path="/*"      element={<Navigate to="/home" />} />
            <Route path="/home"   element={<><HomeHeader /><Home /></>}                />
            <Route path="/direct" element={<Direct />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
        <MobileFooter path={pathname} />
    </PostsContextsProvider>
  </ApiContextProvider>
  );
};

export default App;