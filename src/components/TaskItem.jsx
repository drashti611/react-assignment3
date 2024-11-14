import React from "react";

const TaskItem = ({ task, toggleCompletion, deleteTask }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: task.completed ? "#e0ffe0" : "#f9f9f9",
        borderRadius: "4px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          style={{ marginRight: "10px" }}
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "#888" : "#333",
          }}
        >
          {task.text}
        </span>
      </label>
      <button
        onClick={() => deleteTask(task.id)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#ff4d4f",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
