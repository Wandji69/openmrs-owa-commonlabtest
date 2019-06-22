import React, {Component} from 'react';
import { ReactTable } from 'react-tables';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import { faPlus } from '@fortawesome/free-solid-svg-icons/index';
import '@openmrs/style-referenceapplication/src/sass/openmrs-refapp.scss';
import '@openmrs/style-referenceapplication/src/sass/fragments/_header.scss'
import '@openmrs/style-referenceapplication/src/sass/_reference.scss';
import '@openmrs/style-referenceapplication/src/sass/fragments/_breadcrumbs.scss';
import { Link } from "react-router-dom";


class ManageAttributeTypes extends Component {

    render() {
        const columns = [{
            Header: 'Name',
            accessor: 'Name' // String-based value accessors!
        }, {
            Header: 'Short Name',
            accessor: 'ShortName',
        },
            {
                Header: 'Reference Concept',
                accessor: 'ReferenceConcept' // Custom value accessors!
            },
            {
                Header: 'Linked Attribute Types',
                accessor: 'LinkAttributeTypes' // Custom value accessors!
            }];

        return (
            <div className="main-content">
                    <div className="dashboard">
                        <openmrs-breadcrumbs>
                        <ul id="menu">
                            <li className="first">
                                <Link to="/" activeClassName="active">Admin</Link>
                            </li>
                            <li className="second">
                                <Link to="/ManageTestTypes" activeClassName="active">Manage Test Types</Link>
                            </li>
                            <li className="active">
                                <Link to="/ManageAttributeTypes" activeClassName="active">Manage Attribute Types</Link>
                            </li>
                        </ul>
                        </openmrs-breadcrumbs>
                    </div><br/><br/>

                <h4>Manage Test Types</h4>

                <div>
                    <li>
                        <FontAwesomeIcon icon={faPlus}/>
                        <Link to="/ManageTestTypes" activeClassName="active">Add Attribute Types></Link>
                    </li>
                    </div>
                <div className="table">
                    <ReactTable column={columns} defaultPagaSize='10' database={}/>
                </div>
                </div>

        );
    }
}

export default ManageAttributeTypes;
