import React, { Component } from "react";
import "./todo-form.css";

class TodoForm extends Component {
  state = {
    id: null,
    name: "",
    age: ""
  };

  onInputChange = e => {
    console.log("change cal", e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onFormSubmit = e => {
    console.log("form submit");
    e.preventDefault();
    console.log("state", this.state);
    this.props.addItem(this.state);
    this.setState({
      id: null,
      name: "",
      age: ""
    });
  };
  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            onChange={this.onInputChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter Age"
            id="age"
            onChange={this.onInputChange}
            value={this.state.age}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
