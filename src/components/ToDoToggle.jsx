function ToDoToggle({count}){
    return (
        <div className="toggle-bar">
            <p>{count} {count == 1 ? "item" : "items"} left</p>
            <div className="all-active-completed">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <p>Clear Completed</p>
        </div>
    );
}

export default ToDoToggle;