import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as actionTypes from "../../store/actions";

class Counter extends Component {
  state = {
    counter: 0,
    results: [],
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdd5Counter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstract5Counter}
        />
        <hr></hr>
        <button onClick={this.props.onSaveCurrentCounter}>
          Store Current Counter
        </button>
        <br></br>
        <ul style={{ listStyle: "none", margin: "15px" }}>
          {this.props.resultList.map((res) => (
            <li
              key={res.id}
              onClick={() => this.props.onDeleteCurrentCounter(res.id)}
              style={{
                border: "1px solid #ddd",
                margin: "5px",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              {res.val}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    resultList: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdd5Counter: () => dispatch({ type: actionTypes.ADD_FIVE, payload: 5 }),
    onSubstract5Counter: () =>
      dispatch({ type: actionTypes.REMOVE_FIVE, payload: 5 }),
    onDeleteCurrentCounter: (i) =>
      dispatch({ type: actionTypes.DELETE_COUNTER, id: i }),
    onSaveCurrentCounter: () => dispatch({ type: actionTypes.STORE_COUNTER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
