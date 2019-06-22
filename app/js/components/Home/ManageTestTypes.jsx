import React, { Component } from 'react';
import { ReactTable } from 'react-tables';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faPlus } from '@fortawesome/free-solid-svg-icons/index';
//import '@openmrs/style-referenceapplication/src/sass/openmrs-refapp.scss';
//import '@openmrs/style-referenceapplication/src/sass/fragments/_header.scss'
//import '@openmrs/style-referenceapplication/src/sass/_reference.scss';
//import '@openmrs/style-referenceapplication/src/sass/fragments/_breadcrumbs.scss';

class ManageTestTypes extends Component {
    render() {
        const columns = [{
            Header: 'Name',
            accessor: 'Name' // String-based value accessors!
        }, {
            Header: 'Description',
            accessor: 'Description'
        },
            {
                Header: 'Lab Test Types',
                accessor: 'LabTestTypes' // Custom value accessors!
            }];
        return (
            <div className="main-content">
                <div className="dashboard">
                    <openmrs-breadcrumbs>
                        <ul id="menu">
                            <li className="first">
                                <a href="https://openmrs/admin.html">
                                    Admin
                                </a>
                            </li>
                            <li className="second">
                                <a href="https://openmrs/ManageTestTypes.html">
                                    Manage Test Types
                                </a>
                            </li>
                            <li className="active">
                                <a href="https://openmrs/ManageAttributeTypes.html">
                                    Manage Attribute Types
                                </a>
                            </li>
                        </ul>
                    </openmrs-breadcrumbs>
                </div><br/><br/>

                <h4>Manage Test Types</h4>

                <div className="Add">
                <a href="https://AddTestType.html">
                <FontAwesomeIcon icon={faPlus}/>
                Add Test Types
                </a>
                </div>

               <div classNmae="table">
                <ReactTable column={columns} defaultPagaSize='10' />
               </div>
            </div>
        )
    }
}

export default ManageTestTypes;
