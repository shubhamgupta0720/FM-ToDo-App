import React, { useState } from "react";
import cross from "../assets/images/icon-cross.svg"
import check from "../assets/images/icon-check.svg"

function ToDoItems({no, display, text, setTodos}){

    const [over, setOver] = useState(false);

    const deleteToDo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no!==no);
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i = 0; i < data.length; i++){
            if(data[i].no === no){
                if(data[i].display === ""){
                    data[i].display = "line-through"
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }

    return (
        <>
            <div onMouseOver={() => {
                    setOver(true);
                }}
                onMouseOut={() => setOver(false)}
                 className="todo-item" >
                <div className="check-task" onClick={() => {toggle(no)}}>
                    {display === "" ? <div className="task-checkbox"></div> : <div className="task-checkbox checked">
                            <img src={check} alt="" />
                        </div>}
                    <div className={`todo-task ${display}`}>{text}</div>
                </div>
                <img onClick={() => {
                    deleteToDo(no)
                }} src={over ? cross : ""} alt="" />
            </div>
        </>
    )
}

export default ToDoItems;