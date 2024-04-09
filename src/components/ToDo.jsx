import React from "react";
import moon from "./src/assets/images/icon-moon.svg"

function ToDo(){
    return (
        <div className="header-theme">
            <h1>TODO</h1>
            <img src={moon} alt="" />
        </div>
    )
}

export default ToDo;