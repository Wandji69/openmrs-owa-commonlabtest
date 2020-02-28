import React, { Component } from 'react'
import ConceptList from '../ConceptList';

export default class AddTest extends Component {
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
        };
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
        event.preventDefault();
        alert(`
            ${this.state.ReferenceConcept} 
            ${this.state.TestName} 
            ${this.state.ShortName}
            ${this.state.Description}
            ${this.state.TestGroup}
            ${this.state.RequireSpecimen}`);
    };
    
    handleCancle(event) {
        event.close()
    }

    render() {
        const { referenceConcept, testgroup, description, testName, shortName, requireSpecimen } = this.state
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
                                        value={referenceConcept}
                                        onChange={this.handleReferenceConcept} /></p>
                            </div>
                            <div className="TestName">
                                <p>Test Name
                                    <input type="text"
                                        className="right-align"
                                        value={testName}
                                        onChange={this.handleTestNameChange} /></p>
                            </div>

                            <div className="Short">
                                <p>Short Name
                                <input type="text" className="right-align"
                                        value={shortName}
                                        onChange={this.handleShortNameChange} /></p>
                            </div>
                            <div>
                                <p style={{ color: "black" }} id="desc">Description
                                <textarea placeholder=" " spellcheck="true" className="right-align"
                                        value={description}
                                        onChange={this.handleDescriptionChange} /></p>

                            </div>
                            <div className="TestGroup">
                                <p id="last-form-item">Test Group
                                <select className="form-control right-align"
                                        value={testgroup}
                                        onChange={this.handleTestGroupChange} >
                                        <ConceptList/>
                                    </select></p>
                            </div>

                            <div className="radio">
                                <p id="radio-group">
                                    <label value={requireSpicemen}> Required Specimen Yes</label>
                                    <input type="check"
                                        value="yes"
                                        defaultChecked="true"
                                    /> <label> YES </label>
                                    <input type="check"
                                        value="No"
                                        defaultChecked="false" />
                                    <label> NO </label>
                                </p>
                            </div>
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
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}
