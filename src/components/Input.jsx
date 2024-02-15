import React, {useState} from "react";

function Input(props) {

    const [text, setText] = useState("");

    function handleChange(event){
        setText(event.target.value)
    }

    return(
        <div className="form">
            <input type="text" onChange={handleChange} value={text}/>
            <button onClick={() => {
                props.onAdd(text);
                setText("")
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Input;