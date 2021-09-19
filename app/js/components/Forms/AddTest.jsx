import React, { Component } from "react";

class AddTest extends Component {

  state = {
    referenceConcept: "",
    restName: "",
    shortName: "",
    description: "",
    testGroup: "",
    requireSpecimen: "",
    submit: "",
    cancel: ""
  };

  handleReferenceConcept = (e) => {
    this.setState({
      ReferenceConcept: e.target.value,
      Required: true
    });
  }
  handleTestNameChange = (e) => {
    this.setState({
      TestName: e.target.value,
      Required: true
    });
  }
  handleShortNameChange(e) {
    this.setState({
      ShortName: e.target.value
    });
  }
  handleDescriptionChange(e) {
    this.setState({
      Description: e.target.value
    });
  }
  handleTestGroupChange(e) {
    this.setState({
      TestGroup: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    ${this.state.referenceConcept} 
    ${this.state.testName} 
    ${this.state.shortName} 
    ${this.state.description} 
    ${this.state.testGroup} 
    ${this.state.requireSpecimen}`);
    this.props.addTest(this.state);
    e.target.reset();
  }

  handleCancle = (e) => {
    e.close();
  }

  render() {
    return (
      <div id="boby-wrapper">
        <div id="content">
          <form
            onSubmit={this.handleSubmit}
            onCancle={this.handleCancel}
            id="AddTestType"
          >
            <fieldset>
              <legend>
                <h1>Add Test Type</h1>
              </legend>
              <div className="Reference">
                <p>
                  Reference Concept
                  <input
                    name="Reference Concept"
                    required
                    type="text"
                    autoComplete="off"
                    className="right-align"
                    placeholder="Search Concept"
                    value={referenceConcept}
                    onChange={this.handleReferenceConcept}
                  />
                </p>
              </div>
              <div className="TestName">
                <p>
                  Test Name
                  <input
                    name="Test Name"
                    autoComplete="off"
                    required
                    type="text"
                    className="right-align"
                    value={testName}
                    onChange={this.handleTestNameChange}
                  />
                </p>
              </div>
              <div className="Short">
                <p>
                  Short Name
                  <input
                    name="Short Name"
                    autoComplete="off"
                    type="text"
                    className="right-align"
                    value={shortName}
                    onChange={this.handleShortNameChange}
                  />
                </p>
              </div>
              <div>
                <p style={{ color: "black" }} id="desc">
                  Description
                  <textarea
                    name="Description"
                    placeholder=" "
                    spellcheck="true"
                    className="right-align"
                    value={description}
                    onChange={this.handleDescriptionChange}
                  />
                </p>
              </div>
              <div className="TestGroup">
                <p id="last-form-item">
                  Test Group
                  <select
                    name="Test Group"
                    className="form-control right-align"
                    value={testgroup}
                    onChange={this.handleTestGroupChange}>
                    <ConceptList />
                  </select>
                </p>
              </div>

              <div className="radio">
                <p id="radio-group">
                  <label value={requireSpecimen}> Required Specimen Yes</label>
                  <input type="check" value="yes" defaultChecked="true" />{" "}
                  <label> YES </label>
                  <input type="check" value="No" defaultChecked="false" />
                  <label> NO </label>
                </p>
              </div>
              <div className="input-field col s2">
                <button
                  onClick={this.handleSubmit}
                  type="submit"
                  value="Save Test Type"
                  className="confirm"
                  id="final-button-one"
                >
                  Save Test Type
              </button>
              </div>
              <button
                id="final-button-two"
                onClick={this.handleCancle}
                type="cancle"
                className="close"
              >
                Cancel
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTest;
