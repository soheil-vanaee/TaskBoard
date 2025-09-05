import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ItemDetails from "./components/ItemDetails";
import AddItemForm from "./components/AddItemForm";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("myItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [form, setForm] = useState({
    title: "",
    tag: "",
    description: "",
    emoji: "📌",
  });

  const [selectedIdx, setSelectedIdx] = useState(null);
  const [emojiPickerIdx, setEmojiPickerIdx] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDarkMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const addItem = () => {
    if (form.title.trim() === "") return;
    const newItems = [...items, { ...form }];
    setItems(newItems);
    localStorage.setItem("myItems", JSON.stringify(newItems));
    setForm({ title: "", tag: "", description: "", emoji: "📌" });
    setSelectedIdx(newItems.length - 1);
  };

  const deleteItem = () => {
    if (selectedIdx === null) return;
    const newItems = items.filter((_, i) => i !== selectedIdx);
    setItems(newItems);
    localStorage.setItem("myItems", JSON.stringify(newItems));
    setSelectedIdx(null);
  };

  const updateEmoji = (idx, newEmoji) => {
    const updated = [...items];
    updated[idx].emoji = newEmoji;
    setItems(updated);
    localStorage.setItem("myItems", JSON.stringify(updated));
    setEmojiPickerIdx(null);
  };

  const themeStyles = {
    background: darkMode ? "#0d1117" : "#f9fafb",
    color: darkMode ? "#c9d1d9" : "#111827",
    transition: "0.3s",
    minHeight: "100vh",
    display: "flex",
    fontFamily: "Inter, Segoe UI, sans-serif",
  };

  const mainStyles = {
    flex: 1,
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <div style={themeStyles}>
      {/* Sidebar */}
      <Sidebar
        items={items}
        selectedIdx={selectedIdx}
        setSelectedIdx={setSelectedIdx}
        emojiPickerIdx={emojiPickerIdx}
        setEmojiPickerIdx={setEmojiPickerIdx}
        updateEmoji={updateEmoji}
        darkMode={darkMode}
      />

      {/* Main content */}
      <div style={mainStyles}>
        <h1 style={{ marginBottom: "25px", fontWeight: "600" }}>Details</h1>
        <ItemDetails
          item={selectedIdx !== null ? items[selectedIdx] : null}
          darkMode={darkMode}
          onDelete={deleteItem}
        />

        <AddItemForm
          form={form}
          setForm={setForm}
          addItem={addItem}
          emojiPickerIdx={emojiPickerIdx}
          setEmojiPickerIdx={setEmojiPickerIdx}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;
