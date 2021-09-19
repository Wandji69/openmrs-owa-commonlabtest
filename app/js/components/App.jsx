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
import AddTest from "./Forms/AddTest";
import Tests from "./models/Tests";

//import react component lib
// import ReactTable from "react-table";

class App extends Component {

    state = {
        // default dummy data
        tests: []
    }

    // (newTest) is received from AddTest.jsx
    addTest = (newTest) => {
        let tests = [...this.state.tests, newTest];
        this.setState({
            tests
        });
    }

    // (i, name, age) is received from Users.jsx
    updateTest = (i, referenceConcept, testName, shortName, description, testGroup, requireSpecimen) => {
        let tests = this.state.tests;
        tests[i].referenceConcept = referenceConcept;
        tests[i].testName = testName;
        tests[i].shortName = shortName;
        tests[i].description = description;
        tests[i].testGroup = testGroup;
        tests[i].requireSpecimen = requireSpecimen;
        tests[i].isEditing = false;
        this.setState({
            tests
        });
    }

    pressEditBtn = (i) => {
        let tests = this.state.tests;
        tests[i].isEditing = true;
        this.setState({
            tests
        });
    }

    pressDeleteBtn = (i) => {
        let tests = this.state.tests.filter((u, index) => {
            return index !== i;
        });
        this.setState({
            tests
        });
    }

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
                        <Link to="/manageAttributeTypes">Manage Attribute Types</Link>
                    </li>
                </div>
                <h1>Manage Test Type</h1>
                <FontAwesomeIcon Icon={faPlus} />
                <Link
                    to="/addtesttype" activestyle={{ color: "black" }}>
                    Add Test Type
                </Link>
                <div className="table-area">
                    <div className="table-header-area">List Test Type
                    </div>

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
                                />{" "}
                                    entries{" "}
                            </p>
                        </tr>
                    </table>
                    <div className="container table-body-area">
                        <Tests allTests={this.state.tests} updateTest={this.updateTests} pressEditBtn={this.pressEditBtn} pressDeleteBtn={this.pressDeleteBtn} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;