import React from "react";

function ToDoItems({no, display, text, setTodos}){

    return (
        <div className="todo-item">
            {text}
        </div>
    )
}

export default ToDoItems;