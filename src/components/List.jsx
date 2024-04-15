import React from "react";
import { useDispatch } from "react-redux";
import {task} from './Redux';

function List(props) {

    const dispatch = useDispatch()

    var liststyle = {textDecoration: "line-through"};

    function handleClick() {
        dispatch(task({text:props.text,isDone:props.isDone}))
    }

    return(
        <li onClick={handleClick} style={props.isDone ? liststyle: null}>{props.text}</li>
    )
}

export default List;