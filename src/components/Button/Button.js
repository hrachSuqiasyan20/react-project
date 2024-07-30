import React from "react";

function Button(props){
    return <button className={props.myClass}>{props.textButton}</button>
}

export default  Button