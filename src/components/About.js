import React from "react";
import { useNavigate } from "react-router-dom";

const About = () =>{
    const navigate = useNavigate();

    function clickHandler(){
        //move to support page
        navigate("/support");
    }
    return (
        <div>
            <div>This is about page</div>
            <button onClick={clickHandler}> Move to support page</button>
        </div>
    )
}

export default About;