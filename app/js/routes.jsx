/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import ManageTestTypes from './components/Home/ManageTestTypes';
import AddTestType from './components/Forms/AddTestType';
import ManageAttributeTypes from "./components/Home/ManageAttributeTypes";

export default () => {
  return (
    <Switch>
        <Route exact path="/" component={ManageTestTypes} />
        <Route path="/addtestType" Component={AddTestType} />
        <Route path="/manageAttributeType" component={ManageAttributeTypes} />
    </Switch>
  );
}
