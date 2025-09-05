// src/components/AddItemForm.js
import React from "react";

const AddItemForm = ({ form, setForm, addItem, emojiPickerIdx, setEmojiPickerIdx, darkMode }) => {
  const emojiOptions = ["📌", "✅", "🔥", "📖", "💡", "🎯", "🚀", "📝"];

  const inputBase = {
    display: "block",
    marginBottom: "15px",
    padding: "12px 14px",
    width: "100%",
    borderRadius: "10px",
    border: darkMode ? "1px solid #30363d" : "1px solid #ccc",
    background: darkMode ? "#0d1117" : "#fff",
    color: darkMode ? "#f0f6fc" : "#111827",
    fontSize: "15px",
  };

  return (
    <div>
      <h2 style={{ marginBottom: "15px" }}>➕ Add New Item</h2>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <span
          style={{ fontSize: "28px", cursor: "pointer" }}
          onClick={() =>
            setEmojiPickerIdx(emojiPickerIdx === "form" ? null : "form")
          }
        >
          {form.emoji}
        </span>
        {emojiPickerIdx === "form" && (
          <div
            style={{
              background: darkMode ? "#1e293b" : "#fff",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "6px",
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            {emojiOptions.map((em) => (
              <span
                key={em}
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={() => setForm({ ...form, emoji: em })}
              >
                {em}
              </span>
            ))}
          </div>
        )}
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          style={inputBase}
        />
      </div>
      <input
        type="text"
        placeholder="Tag"
        value={form.tag}
        onChange={(e) => setForm({ ...form, tag: e.target.value })}
        style={inputBase}
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        style={{
          ...inputBase,
          minHeight: "100px",
          resize: "vertical",
        }}
      />
      <button
        onClick={addItem}
        style={{
          background: "linear-gradient(90deg,#3b82f6,#2563eb)",
          border: "none",
          padding: "12px 22px",
          borderRadius: "10px",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddItemForm;
