import React from "react";

const TodoCard = ({ userId, title, completed }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        backgroundColor: completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <h4>User ID: {userId}</h4>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TodoCard;
