import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleCompletion, deleteTask }) => {
  return (
    <>
      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#888" }}>
          No tasks to display
        </p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleCompletion={toggleCompletion}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;
