import { useState } from "react";

export default function Form({ onAddItems }) {
  const [itemDesc, setItemDesc] = useState("");
  const [itemCount, setItemCount] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    if (!itemDesc) return;
    const newItem = {
      id: new Date(),
      description: itemDesc,
      quantity: itemCount,
      packed: false,
    };

    onAddItems(newItem);

    setItemDesc("");
    setItemCount(1);
  }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={itemCount} onChange={(e) => setItemCount(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemDesc}
        onChange={(e) => setItemDesc(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
