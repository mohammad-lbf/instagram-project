import React , {createContext , useState} from 'react';
import {instagramApi} from '../services/api';

export const apiContext = createContext();

const ApiContextProvider = ({children}) => {
    const [userData , setUserData] = useState(instagramApi)

    return (
        <apiContext.Provider value={userData}>
            {children}
        </apiContext.Provider>
    );
};

export default ApiContextProvider;