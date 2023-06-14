import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formInfo,setFormInfo] = useState({name:"", category: "Produce"})

  function handleChange (e){
    if(e.target.name === 'name'){
      setFormInfo({...formInfo, name: e.target.value})
    }
    else if (e.target.name === "category"){
      setFormInfo({...formInfo, category: e.target.value})
    }
  }

  function handleSubmit (e){
    e.preventDefault();
    const newItem = {
      id : uuid(),
      name : formInfo.name,
      category : formInfo.category
    };
    
    onItemFormSubmit(newItem);
    setFormInfo({name:"", category: "Produce"})
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formInfo.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
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
