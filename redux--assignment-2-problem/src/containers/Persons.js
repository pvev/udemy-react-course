import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import { connect } from "react-redux";

import * as actionTypes from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={(person) => this.props.onPersonAdded(person)} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonRemoved(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdded: (person) =>
      dispatch({ type: actionTypes.ADD_PERSON, person: person }),
    onPersonRemoved: (id) =>
      dispatch({ type: actionTypes.REMOVE_PERSON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
