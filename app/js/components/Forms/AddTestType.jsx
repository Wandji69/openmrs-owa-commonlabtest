import React, { Component } from 'react'
import { Radiobox } from 'react-inputs-validation';
import '@openmrs/style-referenceapplication/src/sass/fragments/_forms.scss';
import '@openmrs/style-referenceapplication/src/sass/fragments/_buttons.scss';


class AddTestType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ReferenceConcept: "",
            TestName: "",
            ShortName: "",
            Description: "",
            TestGroup: "SEROLOGY",
            RequireSpecimen: "",
            Submit: "",
            Cancel: ""

        }

    }
    handleReferenceConceptChange = (event) => {
        this.setState({
            ReferenceConcept: event.target.value,
            Required:true
        })
    };
    handleTestNameChange = (event) => {
        this.setState({
            TestName: event.target.value,
            Required:true
        })
    };
    handleShortNameChange = (event) => {
        this.setState({
            ShortName: event.target.value
        })
    };
    handleDescriptionChange = (event) => {
        this.setState({
            Description: event.target.value
        })
    };
    handleTestGroupChange = (event) => {
        this.setState({
            TestGroup: event.target.value
        })
    };
    handleSubmit = (event) => {
            alert(`
            ${this.state.ReferenceConcept} 
            ${this.state.TestName} 
            ${this.state.ShortName}
            ${this.state.Description}
            ${this.state.TestGroup}
            ${this.state.RequireSpecimen}`);
           event.preventDefault()
    };
    handleCancle = (event) => {
        event.close()
    }

    render() {
        const {ReferenceConcept, TestGroup, Description, TestName, ShortName, RequireSpecimen} = this.state
        return (
            <div id="boby-wrapper">
                <div id="content">
                    <form onSubmit={this.handleSubmit} onCancle={this.handleCancel} id="AddTestType">
                        <fieldset>
                            <legend>
                                <h1>Add Test Type</h1>
                            </legend>
                            <div className="Reference">
                                <label className='left' >Reference Concept</label>
                                <input type="text" className="right-align"
                                       placeholder="Search Concept"
                                       value={ReferenceConcept}
                                       onChange={this.handleReferenceConceptChange} />
                            </div>
                            <div className="TestName">
                                <label className='left'>Test Name</label>
                                <input type="text" className="right-align"
                                       value={TestName}
                                       onChange={this.handleTestNameChange} />
                            </div>

                            <div className="Short">
                                <label className='left' >Short Name</label>
                                <input type="text" className="right-align"
                                       value={ShortName}
                                       onChange={this.handleShortNameChange} />
                            </div>
                            <div className="description">
                                <label className='left'>Description</label>
                                <textarea placeholder=" " spellcheck="true" className="right-align"
                                          value={ShortName}
                                          onChange={this.handleDescriptionChange} />
                            </div>
                        <div className="TestGroup">
                                    <label>Test Group</label>
                                    <select className="form-control right-align" value={TestGroup} onChange={this.handleTestGroupChange} >
                                        <option value="">SEROLOGY</option>
                                        <option value="">OPHTHALMOLOGY</option>
                                        <option value="">CARDIOLOGY</option>
                                        <option value="">BACTERIOLOGY</option>
                                        <option value="">BIOCHEMISTRY</option>
                                        <option value="">BLOOD_BANK</option>
                                        <option value="">CYTOLOGY</option>
                                        <option value="">HEMATOLOGY</option>
                                        <option value="">IMMUNOLOGY</option>
                                        <option value="">MIRCROBIOLOGY</option>
                                        <option value="">RADIOLOGY</option>
                                        <option value="">SONOLOGY</option>
                                        <option value="">UNINALYSIS</option>
                                        <option value="">OTHER</option>
                                    </select>
                            </div>

                            <div className="radio">
                                <label>Require Specimen</label>
                                <div>
                                    <label>Yes</label><Radiobox/>
                                    <label>No</label><Radiobox/>
                                </div>
                            </div>

                        </fieldset>
                        <button onChange={this.handleSubmit} type='submit'
                                className='confirm'
                                id='AddTestType'>
                            Save Test Type
                        </button>
                        <button onChange={this.handleCancle}
                        type='cancle'
                        className='close'>
                            Cancel
                        </button>
                    </form>
                </div>
            </div >
        )
    }
}

export default AddTestType
