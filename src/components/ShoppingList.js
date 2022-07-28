import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchChange, setSearchChange] = useState("")
  const [submittedData, setSubmittedData] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchChange(event.target.value);
  }

  function searchAndFilter(item) {
    const itemName = item.name
    if (searchChange.length === 0) {
      return true;
    }
    if (itemName.includes(searchChange)) {
      return true
    }
    else {
      return false
    }
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return searchAndFilter(item)    
    }
    if (item.category === selectedCategory) {
      return searchAndFilter(item)     
    }
  });

  function onItemFormSubmit(newItem) {
    const dataArray = [...submittedData, newItem];
    setSubmittedData(dataArray);
  }

  const listOfSubmissions = submittedData.map((item) => {
    return (
      <Item key={item.id} name={item.name} category={item.category} />
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {listOfSubmissions}
      </ul>
    </div>
  );
}

export default ShoppingList;
