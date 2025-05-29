import React from "react";

function Greetings(props) {
    return (
        <div>
            <h3>Hello</h3>
            <p>Welcome {props.name}!</p>
            <p> {props.message}</p>
        </div>
    )
}

export default Greetings;