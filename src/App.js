import React, { Component } from "react";
import Header from "./components/layout/header";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Učit se programovat", finished: false },
      { id: 2, name: "Vyměnit kola na autě", finished: false },
      { id: 3, name: "Koupit hokejku", finished: false }
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
  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
