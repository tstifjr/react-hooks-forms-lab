import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterWord, setFilterWord] = useState("")
  const [itemList, setItemList] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setFilterWord(event.target.value)
  }

  function onItemFormSubmit(formData){
    setItemList([...itemList, formData]);
  }

  const itemsToDisplay = itemList.filter((item) => {
      if (selectedCategory === "All") return true;
      else return item.category === selectedCategory;
  });

  const itemsToDisplayToo = itemsToDisplay.filter((item) => {
    if (filterWord === "") return true;
     else  return (item.name.indexOf(filterWord) >=0)
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {onItemFormSubmit}/>
      <Filter search={filterWord} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplayToo.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
