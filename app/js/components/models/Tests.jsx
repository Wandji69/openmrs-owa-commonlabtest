import React, { Component } from 'react'

export default class Tests extends Component {

    // call updateTest from App.jsx
    handleUpdate = () => {
        this.this.props.updateTest = (
            this.indexNum,
            this.referenceConcept.value,
            this.testName.value,
            this.shortName.value,
            this.description.value,
            this.testGroup.value,
            this.requireSpecimen.value);
    }

    render() {
        const { allTests } = this.props;

        const testList = allTests.map((test, index) => {
            return test.isEditing === true ? (
                <tr key={index}>
                    <td>
                        <input type="text" ref={(val) => { this.testName = val }} required defaultValue={test.testName} />
                    </td>
                    <td>
                        <input type="text" ref={(val) => { this.shortName = val }} required defaultValue={test.shortName} />
                    </td>
                    <td>
                        <input type="text" ref={(val) => { this.testGroup = val }} required defaultValue={test.testGroup} />
                    </td>
                    <td>
                        <input type="text" ref={(val) => { this.referenceConcept = val }} required defaultValue={test.referenceConcept} />
                    </td>
                    <td>
                        <input type="button" value="Update" onClick={this.handleUpdate} ref={() => { this.indexNum = index }} className="btn green" />
                    </td>
                </tr>
            ) : (
                    <tr key={index}>
                        <td>{test.referenceConcept}</td>
                        <td> {test.testName} </td>
                        <td> {test.shortName} </td>
                        <td> {test.description} </td>
                        <td> {test.testGroup} </td>
                        <td> <button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn red" onClick={() => PressDelete(index)}>Delete</button></td>
                    </tr>
                );
        })
        return (
            <table className="striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Short Name</th>
                        <th>Test Group</th>
                        <th>Referencce Concept</th>
                        <th>Link Attributes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testList}
                </tbody>
            </table>
        )
    }
}
