import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/todo-list/todo-list.js";
import TodoForm from "./components/todo-form/todo-form.js";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Ahmed",
        age: 22
      },
      {
        id: 2,
        name: "Sara",
        age: 18
      },
      {
        id: 3,
        name: "Ramy",
        age: 30
      }
    ]
  };

  removeItem = id => {
    if (!id) {
      return;
    }
    let items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
    console.log("new items after remove", items);
  };

  addItem = item => {
    debugger;
    let isEmptyItem = Object.values(item).every(x => x === null || x === "");
    if (!item || isEmptyItem) {
      return;
    }
    let items = this.state.items;
    item.id = Math.random();
    items.push(item);
    this.setState({ items });
    console.log("new items after add", items);
  };

  render() {
    return (
      <div className="app">
        <h1>Todo List App</h1>
        <TodoList items={this.state.items} removeItem={this.removeItem} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
