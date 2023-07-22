// Code Keypad Component Here
import React from "react";

function Keypad (){
    const handlePasswordChange=(event)=>{console.log('Entering password...')}
    return (
        <div>
            <input type="password" onChange={handlePasswordChange}/>
        </div>
    )
}

export default Keypad;