import React, { Component } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: "This is Sample Task 1", completed: false },
        { id: 2, text: "This is completed Task 2", completed: true },
      ],
    };
  }

  // Function to add a new task
  addTask = (newTaskText) => {
    if (newTaskText.trim()) {
      this.setState((prevState) => ({
        tasks: [
          ...prevState.tasks,
          { id: Date.now(), text: newTaskText, completed: false },
        ],
      }));
    }
  };

  // Function to toggle task completion
  toggleCompletion = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  // Function to delete a task
  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "500px",
          margin: "100px auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Task Manager
        </h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleCompletion={this.toggleCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
