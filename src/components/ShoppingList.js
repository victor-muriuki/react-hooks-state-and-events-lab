import React from "react";
import Item from "./Item";
import React, { useState } from "react";

function ShoppingList  ({ items })  {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All Categories</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>

      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
