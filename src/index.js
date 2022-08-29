import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import './style/bootstrapIcons.css';
import { ApolloProvider , InMemoryCache , ApolloClient } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/cl7d089744kll01umhng0h202/master",
  cache:new InMemoryCache()
})
root.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ApolloProvider>
);
