import React, {useState} from "react";
import List from "./List";
import Input from "./Input";

function App() {
  const [items, setItems] = useState([]);

  function addtolist(text){
    (text!="") && setItems(prevItems => [...prevItems, text])
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onAdd={addtolist} />
      <div>
        <ul>
          {items.map(item => <List text={item} /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
