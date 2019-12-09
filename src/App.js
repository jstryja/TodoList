import React, { Component } from "react";
import Header from "./components/layout/header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      { id: uuid.v4(), name: "Učit se programovat", finished: false },
      { id: uuid.v4(), name: "Vyměnit kola na autě", finished: false },
      { id: uuid.v4(), name: "Koupit hokejku", finished: false }
    ]
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.finished = !todo.finished;
        }
        return todo;
      })
    });
  };

  addTodo = name => {
    const newTodo = {
      id: uuid.v4(),
      name,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
