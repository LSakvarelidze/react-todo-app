import React from "react";
import Card from "./UI/Card";
import styles from "./ToDoItem.module.css"
import Button from "./UI/Button"

const todoitem = props => {
    return <Card section={props.section}>
        <div className={styles.wrapper}>
            <span className={props.done ? styles.done : ""}>{props.title}</span>
            <div className={styles.actiongroup}>
                {props.done ? "" : <Button onClick={props.markDone(props.id)}>✔️</Button>}
                <Button onClick={props.deleteItem(props.id)}>❌</Button>
            </div>
        </div>
    </Card>
}

export default todoitem;