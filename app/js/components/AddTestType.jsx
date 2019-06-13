import React, { Component } from 'react'



class AddTestType extends Component {
    // constructor(props) {
    //     super(props)
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleCancel = this.handleCancel.bind(this);

    //     state = {
    //         ReferenceConcept: '',
    //         TestName: '',
    //         ShortName: '',
    //         Description: '',
    //         RequireSpice: '',
    // //         saveTestType: ''

    //     };
    // }
    render() {
        return (
            <div id="boby-wrapper">
                <div id="content">
                    <form id="addtesttype">
                        <fieldset>
                            <legend>
                                <h1>Add Test Type</h1>
                            </legend>
                            <p className='left'>
                                <label>Reference Concept</label>
                                <input className='right' type="text"
                                    placeholder="Search Concept"
                                    // value={
                                    //     this.state.ReferenceConcept
                                    // }
                                />
                            </p>
                            <p className='left'>
                                <label>Test Name</label>
                                <input type="text"
                                    // value={
                                    //     this.state.TestName
                                    // }
                                />
                            </p>
                            <p className='left'>
                                <label>Short Name</label>
                                <input type="text"
                                    // value={
                                    //     this.state.ShortName
                                    // }
                                />
                            </p>
                            <p className='left'>
                                <label>Description</label>
                                <input className='right'
                                    type="text"
                                    // value={this.state.Description} 
                                    />
                            </p>
                            <p className='left'>
                                {/* <label>Test Group</label>   <Selection> */}
                                    <input className='right' type="text"
                                        placeholder="Search Concept">
                                        {/* <Option></Option>
                                        <Option></Option>
                                        <Option></Option>
                                        <Option></Option>
                                        <Option></Option>
                                        <Option></Option> */}
                                    </input>
                                {/* </Selection> */}
                            </p>
                            <p className='left'>
                                <label>RequireSpice</label>
                            </p>
                        </fieldset>
                        <button className='left' onClick={
                            this.handleSubmit
                        }
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

            </div >
        )
    }
}

export default AddTestType
