/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//import react component lib
import ReactTable from "react-table";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="balow-nav-section">
          <li>
            <Link activeStyle={(color = "black")} to="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/managetesttypes">Manage Test Types</Link>
          </li>
          <li>
            <Link to="/manageattributtypes">Manage Attribute Types</Link>
          </li>
        </div>
        <h1>Manage Test Type</h1>
        <FontAwesomeIcon Icon={faPlus} />{" "}
        <Link to="/addtesttype" activestyle={{ color: "black" }}>
          Add Test Type
        </Link>
        <div className="table-area">
          <div className="table-header-area">List Test Type</div>
          <div className="table-body-area">
            <table id="t01">
              <tr colspan="5">
                <p id="tp01">
                  {" "}
                  show{" "}
                  <input
                    type="number"
                    name="quantity"
                    min="10"
                    max="100"
                    defaultValue="10, 25, 50, 100"
                  ></input>{" "}
                  entries{" "}
                </p>
              </tr>
              <tr>
                <th>Name</th>
                <th>Short Name</th>
                <th>Test Group</th>
                <th>Reference Concept</th>
                <th>Linked Attribute Types</th>
              </tr>
              <tr>
                <p style={{ color: black, align: center }}>No data</p>
              </tr>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
