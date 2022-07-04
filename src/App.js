import React , {useContext} from 'react';
// context
import ApiContextProvider , {apiContext} from './Context/ApiContextProvider';

const App = () => {
  const userData = useContext(apiContext)
  return (
    <ApiContextProvider>

    </ApiContextProvider>
  );
};

export default App;