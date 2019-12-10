import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    name: ""
  };

  inputChangeHandler = e => {
    this.setState({ name: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} style={{ display: "flex" }}>
          <input
            type="text"
            name="name"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Add Todo ..."
            value={this.state.name}
            onChange={this.inputChangeHandler}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
