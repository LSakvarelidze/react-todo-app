import React, { useRef } from "react";
import styles from "./AddToDo.module.css"
import Card from "./UI/Card";

const AddToDo = props => {

    const todoitem = useRef()

    return (
        <Card section="add">
            <form style={{ width: "100%" }} onSubmit={(e) => {
                e.preventDefault()
                props.addItem(todoitem.current.value)
                todoitem.current.value = ""
            }}>
                <div className={styles.addtodowrap}>
                    <button className={styles.addtodobtn}>+</button>
                    <div className={styles.inputgroup}>
                        <input className={styles.addtodoinp} ref={todoitem} placeholder="Create new todo" />
                        <div className={styles.line}></div>
                    </div>
                </div>
            </form>
        </Card>
    )
}

export default AddToDo