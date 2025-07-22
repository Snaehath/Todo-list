import { useState, FormEvent } from "react";

interface NewTodoFormProps {
  onSubmit: (title: string) => void;
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedItem = newItem.trim();
    if (!trimmedItem) return;

    onSubmit(trimmedItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          id="item"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
