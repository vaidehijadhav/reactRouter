import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () =>{
    const navigate = useNavigate();

    function clickHandler(){
        //move to labs page
        navigate("/labs");
    } 
    return (
        <div>
            <div>This is Support Page</div>
            <button onClick={clickHandler}>Move to Labs page</button>
        </div>
    )
}

export default Support;