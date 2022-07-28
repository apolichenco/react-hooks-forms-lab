import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [submittedName, setName] = useState();
  const [submittedCategory, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleNewCategoryChange(event) {
    setCategory(event.target.value);
  }

function handleSubmit(e) {
  e.preventDefault()
  const newItem = {
    id: uuid(),
    name: submittedName,
    category: submittedCategory,
  };
  onItemFormSubmit(newItem)
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={setName}/>
      </label>
      <label>
        Category:
        <select name="category" onChange={handleNewCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
