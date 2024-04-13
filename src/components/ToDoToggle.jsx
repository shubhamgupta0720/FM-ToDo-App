import { useContext } from "react";
import ToggleContext from "../assets/context/ToggleContext";

function ToDoToggle({count}){

    const {setToDoFilter} = useContext(ToggleContext);

    return (
        <>
            <div className="toggle-bar">
                <p>{count} {count == 1 ? "item" : "items"} left</p>
                <div className="all-active-completed">
                    <p onClick={() => {setToDoFilter("All")}}>All</p>
                    <p onClick={() => {setToDoFilter("Active")}}>Active</p>
                    <p onClick={() => {setToDoFilter("Completed")}}>Completed</p>
                </div>
                <p onClick={() => {setToDoFilter("ClearCompleted")}}>Clear Completed</p>
            </div>
            <div className="all-active-completed-mobile">
                <p onClick={() => {setToDoFilter("All")}}>All</p>
                <p onClick={() => {setToDoFilter("Active")}}>Active</p>
                <p onClick={() => {setToDoFilter("Completed")}}>Completed</p>
            </div>
        </>
    );
}

export default ToDoToggle;