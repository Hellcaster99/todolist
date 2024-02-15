import React, { useState } from "react";

function List(props) {

    const [isDone, setDone] = useState(false);

    var liststyle = {textDecoration: "line-through"};

    function handleClick() {isDone ? setDone(false) : setDone(true);
}

    return(
        <li onClick={handleClick} style={isDone ? liststyle: null}>{props.text}</li>
    )
}

export default List;