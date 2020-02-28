import React, { Component } from "react";
import Axios from "axios";

export default class ConceptList extends Component {
  state = {
    concepts: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:8080/openmrs/ws/rest/v1/concepts").then(res => {
      console.log(res);
      this.setState({ concepts: res.data });
    });
  }

  render() {
    return (
      <option>
        {this.state.concepts.map(concept => (
          <li key={concept.id}>{concept.name}</li>
        ))};
      </option>
    );
  }
}
