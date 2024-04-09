import React from "react";
import moon from "../assets/images/icon-moon.svg"

function ToDo(){
    return (
        <div className="main-panel">
            <div className="header-theme">
                <h1>TODO</h1>
                <img src={moon} alt="" />
            </div>
        </div>
    )
}

export default ToDo;