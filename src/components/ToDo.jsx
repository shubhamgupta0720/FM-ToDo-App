import React, { useRef, useState, useEffect, useContext } from "react";
import moon from "../assets/images/icon-moon.svg"
import ToDoItems from "./ToDoItems";
import ToggleContext from "../assets/context/ToggleContext";
import ToDoToggle from "./ToDoToggle";

function ToDo(){

    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    let [count, setCount] = useState(0);
    const {todoFilter} = useContext(ToggleContext);
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
    }, []);

    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("todos", JSON.stringify(todos));
            setCount((JSON.parse(localStorage.getItem("todos")).filter((todo) => todo.display === "")).length)
        }, 100)
    }, [todos])

    useEffect(() => {
        if (todoFilter === "All") {
          setFilteredTodos(todos);
        } 
        else if (todoFilter === "Active") {
          const filteredData = todos.filter((todo) => todo.display === "");
          setFilteredTodos(filteredData);
        } 
        else if (todoFilter === "Completed") {
          const filteredData = todos.filter((todo) => todo.display !== "");
          setFilteredTodos(filteredData);
        }
        else if(todoFilter === "ClearCompleted"){
            const filteredData = todos.filter((todo) => todo.display === "");
            setFilteredTodos(filteredData);
            setTodos(filteredData);
        }
      }, [todoFilter, todos]);

    return (
        <div className="main-panel">
            <div className="header-theme">
                <h1>TODO</h1>
                <img src={moon} alt="" />
            </div>
            <div className="checkbox"></div>
            <input onKeyDown={(event) => {addToDo(event)}} ref={inputRef} className="todo-input" type="text" placeholder="Create a new todo.."/>
            <div className="todo-list">
                {
                filteredTodos.map((item, index) => {
                    return( 
                        <>
                    <ToDoItems key={index} setTodos = {setTodos} no = {item.no} display = {item.display} text = {item.text}/>
                        <hr />
                        </>
                )
                })
                }
                <ToDoToggle count = {count}/>
            </div>
        </div>
    )
}

export default ToDo;