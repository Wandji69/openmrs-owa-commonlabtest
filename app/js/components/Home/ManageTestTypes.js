import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


class ManageTestTypes extends Component {

  render() {
    return (
      <div>
      <div className="main-nav-section">
        <a href="#">Admin</a>
        <a href="#">Manage Test Types</a>
        <a href="#">Manage Attribute Types</a>
      </div>
      <h1>Manage Test Type</h1>
      <FontAwesomeIcon Icon={faPlus} /> <h3>Add Test Type</h3>
      <div className="table-area">
        <div className="table-header-area">List Test Type</div>
        <div className="table-body-area">
          <table id="t01">
            <tr colspan="5">
              <p id="tp01"> show <input type="number" name="quantity" min="10" max="100"></input> entries </p>
            </tr>
            <tr>
              <th>Name</th>
              <th>Short Name</th>
              <th>Test Group</th>
              <th>Reference Concept</th>
              <th>Linked Attribute Types</th>
            </tr>
            <tr>
              <p>No data</p>
            </tr>
            <tr>
            </tr>
          </table>
        </div>
      </div>
      </div>
    );
  }
}

export default ManageTestTypes;
