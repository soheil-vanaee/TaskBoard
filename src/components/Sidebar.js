import React from "react";

const Sidebar = ({
  items,
  selectedIdx,
  setSelectedIdx,
  emojiPickerIdx,
  setEmojiPickerIdx,
  updateEmoji,
  darkMode,
}) => {
  const emojiOptions = ["📌", "✅", "🔥", "📖", "💡", "🎯", "🚀", "📝"];

  return (
    <div
      style={{
        width: "260px",
        padding: "20px",
        borderRight: darkMode ? "1px solid #30363d" : "1px solid #e5e7eb",
        background: darkMode ? "#161b22" : "#ffffff",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontWeight: "600" }}>📋 My Items</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setSelectedIdx(idx)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background:
                selectedIdx === idx
                  ? darkMode
                    ? "#334155"
                    : "#e0f2fe"
                  : "transparent",
              position: "relative",
            }}
          >
            <span
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                setEmojiPickerIdx(idx === emojiPickerIdx ? null : idx);
              }}
            >
              {item.emoji}
            </span>
            <div>
              <strong>{item.title}</strong>
              <br />
              <span style={{ fontSize: "12px", color: "#888" }}>{item.tag}</span>
            </div>

            {emojiPickerIdx === idx && (
              <div
                style={{
                  position: "absolute",
                  marginLeft: "150px",
                  background: darkMode ? "#1e293b" : "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "6px",
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  zIndex: 10,
                }}
              >
                {emojiOptions.map((em) => (
                  <span
                    key={em}
                    style={{ cursor: "pointer", fontSize: "18px" }}
                    onClick={() => updateEmoji(idx, em)}
                  >
                    {em}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;