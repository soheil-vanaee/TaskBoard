import React from "react";

const ItemDetails = ({ item, darkMode, onDelete }) => {
  if (!item) {
    return <p style={{ color: "#888" }}>← Select an item from the sidebar</p>;
  }

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: darkMode ? "#1e293b" : "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "30px",
      }}
    >
      <h2>
        {item.emoji} {item.title}
      </h2>
      <p>
        <strong>Tag:</strong> {item.tag}
      </p>
      <p>{item.description}</p>
      <button
        onClick={onDelete}
        style={{
          marginTop: "15px",
          background: "linear-gradient(90deg,#ef4444,#dc2626)",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        🗑 Delete
      </button>
    </div>
  );
};

export default ItemDetails;
