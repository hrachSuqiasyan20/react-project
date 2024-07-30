import React from "react";
import Button from "../Button/Button";

function Body(){
    return (
        <div className={'body'}>
            <div className="body-info">
                <p>One Page Bootstrap</p>
                <p>Website Template</p>
                <span>We are team of talanted designers</span>
                <Button textButton={'Get Started'} myClass={'button buttonBody'}/>
            </div>
        </div>
    )
}

export default Body