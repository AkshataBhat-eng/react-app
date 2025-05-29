import React from "react";

function Clock() {
    return (
        <div>
            <h3>It is {new Date().toLocaleTimeString()}</h3>
        </div>
    )
}

export default Clock;