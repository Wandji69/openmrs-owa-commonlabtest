import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Attributes from './components/models/Attributes';
import AddTest from './components/Forms/AddTest';

export default () => {
  return (
    <Switch>
      <Route exact path={["/", "/managetesttypes"]} component={App} />
      <Route exact path="/manageAttributeTypes" component={Attributes} />
      <Route exact path="/addtesttypes" component={AddTest} />
    </Switch>
  );
}
