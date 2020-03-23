import React, { Component } from "react";
// import axios from "axios";
import Loader from "@openmrs/react-components/lib/components/widgets/Loader";

export default class ConceptList extends Component {
  // state = {
  //   concepts: []
  // };
  static defaultProps = {
    concept: 'SEROLOGY'
  }
  
  constructor(props) {
    super(props);
    this.state = {
      concepts: [],
      isLoaded: false,
    }
  }
  

  componentDidMount() {
    fetch("http://localhost:8080/openmrs/ws/rest/v1/concepts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          concepts: json,
        })
      });
  }

  render() {
    var { isLoaded, concepts } = this.state;

    if (!isLoaded) {
      return <div>
        <Loader />
      </div>
    }
    else {
      return (
        <div>
        {/* <div>Data has been Loaded </div> */}
          <option>
            {this.props.concept}
          {concepts.map(concept => (
            <li key={concept.id}>{concept.name}</li>
          ))};
      </option>
        </div>
      );
    }
  }
}
