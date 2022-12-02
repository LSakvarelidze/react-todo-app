import React from "react";
import ToDoItem from "./ToDoItem";
import Card from './UI/Card'

const ToDoApp = props => {
    return <div>
        {props.items.map((item, idx, arr) => {
            const { id, title, done } = item
            return <ToDoItem section={idx === 0 ? "top" : idx === arr.length - 1 ? "bottom" : "normal"} key={id} deleteItem={smth => props.deleteItem(smth)} markDone={(smth) => props.markDone(smth)} id={id} title={title} done={done} />
        })}
    </div>
}

export default ToDoApp