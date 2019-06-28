import React, { Component } from 'react'
import '@openmrs/style-referenceapplication/lib/referenceapplication'

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
    handleReferenceConcept(event) {
        this.setState({
            ReferenceConcept: event.target.value,
            Required: true
        })
    };
    handleTestNameChange(event) {
        this.setState({
            TestName: event.target.value,
            Required: true
        })
    };
    handleShortNameChange(e) {
        this.setState({
            ShortName: e.target.value
        })
    };
    handleDescriptionChange(e) {
        this.setState({
            Description: e.target.value
        })
    };
    handleTestGroupChange(e) {
        this.setState({
            TestGroup: e.target.value
        })
    };
    handleSubmit(event) {
        alert(`
            ${this.state.ReferenceConcept} 
            ${this.state.TestName} 
            ${this.state.ShortName}
            ${this.state.Description}
            ${this.state.TestGroup}
            ${this.state.RequireSpecimen}`);
        event.preventDefault()
    };
    handleCancle(event) {
        event.close()
    }

    render() {
        const { ReferenceConcept, TestGroup, Description, TestName, ShortName, RequireSpecimen } = this.state
        return (
            <div id="boby-wrapper">
                <div id="content">
                    <form onSubmit={this.handleSubmit} onCancle={this.handleCancel} id="AddTestType">
                        <fieldset>
                            <legend>
                                <h1>Add Test Type</h1>
                            </legend>
                            <div className="Reference">
                                <p>Reference Concept
                                <input type="text" className="right-align"
                                        placeholder="Search Concept"
                                        value={ReferenceConcept}
                                        onChange={this.handleReferenceConcept} /></p>
                            </div>
                            <div className="TestName">
                                <p>Test Name
                                    <input type="text" className="right-align"
                                    value={TestName}
                                    onChange={this.handleTestNameChange} /></p>
                            </div>

                            <div className="Short">
                                <p>Short Name
                                <input type="text" className="right-align"
                                    value={ShortName}
                                    onChange={this.handleShortNameChange} /></p>
                            </div>
                            <div>
                                <p id="desc">Description
                                <textarea placeholder=" " spellcheck="true" className="right-align"
                                    value={Description}
                                    onChange={this.handleDescriptionChange} /></p>
                                    
                            </div>
                            <div className="TestGroup">
                                <p id="last-form-item">Test Group
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
                                </select></p>
                            </div>

                            <div className="radio">
                            <p id="radio-group">
                        Required Specimen Yes <input type="radio"  value="yes" /> N0 <input type="radio" value="No" /> </p>
                            </div>

                        </fieldset>
                        <button onChange={this.handleSubmit} type='submit'
                            className='confirm'
                            id='final-button-one'>
                            Save Test Type
                        </button>
                        <button id="final-button-two" onChange={this.handleCancle}
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
