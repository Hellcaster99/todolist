import React from "react";
import List from "./List";
import Input from "./Input";
import { useSelector,useDispatch } from "react-redux";
import { add } from "./Redux";

function App() {

  const list = useSelector((state)=>state.list);
  const dispatch = useDispatch();

  function addtolist(text){
    dispatch(add({text}))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Input onAdd={addtolist} />
      <div>
        <ul>
          {list.map((item,i) => <List key={i} text={item.text} isDone={item.isDone} /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
