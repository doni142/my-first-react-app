import React, { useState, useEffect } from "react";
import "../Counter.css"

function Counter() {
    let count = 0;
    useEffect(() => {
      window.alert('I am clicked');
    });
    const [currentstate, updatestate] = useState(count);
    const handleclick = () => {
        updatestate(currentstate + 1);
    };

    return (
        <>
            <div className="counter_parent">
                <div className="main-div">
                    <h3>This is a Counter</h3>
                    <button onClick={handleclick}>{currentstate} </button>
                </div>
            </div>    
        </>
    );
}

export default Counter;