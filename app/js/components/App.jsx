/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

//import react component lib
import ReactTable from 'react-table';


export default class App extends Component {
  render() {
    const data = []
    return (
      <div>
        <div className="nav-section">
          <li><Link to="/admin" >Admin</Link></li>
          <li><Link to="manageetesttypes" >Manage Test Types</Link></li>
          <li><Link to="manageAttributetype">Manage Attribute Type</Link></li>
        </div>
        <h1>Manage Test Type</h1>
        <FontAwesomeIcon Icon={faPlus} /><Link to="/addtesttype" >Add Test Type</Link>
        <div className="table-area">
          <div className="table-head-area">List Test Types</div>
          <div className="table-body-area">
            <ReactTable data={this.state.data} defaultPageSize={10} />
          </div>
        </div>
      </div>
    )
  }
}
                                                                                                                                                                                                