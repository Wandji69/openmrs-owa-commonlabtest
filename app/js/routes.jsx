import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
// import AddTest from './components/Forms/AddTest';

export default () => {
  return (
    
      <Route path="/" component={App} />
  );
}
