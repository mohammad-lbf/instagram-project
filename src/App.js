import React , {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Direct from './components/Direct';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import MobileFooter from './components/MobileFooter';
// context
import ApiContextProvider , {apiContext} from './Context/ApiContextProvider';
import PostsContextsProvider from './Context/PostsContextsProvider';

const App = () => {
  const userData = useContext(apiContext)
  return (
  <ApiContextProvider>
    <PostsContextsProvider>
        <Routes>
            <Route path="/*"      element={<Navigate to="/home" />} />
            <Route path="/home"   element={<><HomeHeader /><Home /><MobileFooter /></>}                />
            <Route path="/direct" element={<Direct />} />
        </Routes>
    </PostsContextsProvider>
  </ApiContextProvider>
  );
};

export default App;