import React from "react"

function Header() {

    let title = "";

    const desire = "Mony"
    if(desire === "Mony"){
        title = "Mony is my life.";
    }else{
        title = "Developing is my life."
    }
    return (
        <h1>{title}</h1>
    );
}

export default Header