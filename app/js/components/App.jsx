/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
// import styleReferenceapplication from '@openmrs/style-referenceapplication'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class App extends React.Component {

  render() {
    return (

      <div id="boby-wrapper">
        <div id="content">
          <form id="addtesttype">
            <fieldset>
              <legend>
                <h1>Add Test Type</h1>
              </legend>
              <p>
                <label className='left'>Reference Concept</label>
                <input className='right' type="text"
                  placeholder="Search Concept" />
              </p>
              <p>
                <label className='left'>Test Name</label>
                <input className='right' type="text"
                />
              </p><br/>
              <p>
                <label className='left'>Short Name</label>
                <input type="text" className='right'
                />
              </p><br/>
              <p>
                <label className='left' >Description</label>
                <input className='right'
                  type="text"
                />
                </p><br/>
                <p>
                  <label className='left'>RequireSpice</label>
                </p>
            </fieldset>
              <button className='left' onClick={
                this.handleSubmit}
                type='submit'
                className='confirm'
                id='AddTestType'>
                Save Test Type
                                </button>
              <button className='right' onClick={
                this.handleCancel
              }
              >Cancel
                            </button>
         </form>
        </div>
        </div>
        )
    
      }
    }
    
