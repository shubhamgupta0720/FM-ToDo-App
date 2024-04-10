import React, { useRef, useState, useEffect } from "react";
import moon from "../assets/images/icon-moon.svg"
import ToDoItems from "./ToDoItems";

let count = 0;

function ToDo(){

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const addToDo = (event) => {
        if(event.key === 'Enter'){
            console.log(inputRef.current.value);
            setTodos([...todos, {no:count++, text: inputRef.current.value, display:""}]);
            inputRef.current.value = "";
            localStorage.setItem("todos_count", count);
        }
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count = localStorage.getItem("todos_count");
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100)
    }, [todos])

    return (
        <div className="main-panel">
            <div className="header-theme">
                <h1>TODO</h1>
                <img src={moon} alt="" />
            </div>
            <input onKeyDown={(event) => {addToDo(event)}} ref={inputRef} className="todo-input" type="text" placeholder="Create a new todo.."/>
            <div className="todo-list">
                {todos.map((item, index) => {
                    return <ToDoItems key={index} setTodos = {setTodos} no = {item.no} display = {item.display} text = {item.text}/>
                })}
            </div>
        </div>
    )
}

export default ToDo;