import React from "react";

function EventHandler() {

    const handleClick = (e) => {
        console.log(e);
    }

    return(
        <button onClick={(e)=>handleClick(e)}>Click Me</button>
    )

}

export default EventHandler;