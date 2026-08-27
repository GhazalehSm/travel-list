import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingItems from "./PackingItems";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handelDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handelDeleteAllItems() {
    if (!items.length) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingItems
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handelToggleItem}
        onDeleteAllItems={handelDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
