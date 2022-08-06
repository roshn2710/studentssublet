import React from "react";

import "./AuthInfo.css";
import browse from "../../assets/browse.svg"

const AuthInfo = (props) =>  {
    let information = ""
    if(props.authType === 'login') {
        information = (
            <p className = "information">
                Log in to find and post <br />apartments to sublet to <br />students.
            </p>
        )

    }else{
        information = (
            <p className = "information">
                Create an account to find <br /> and post apartments to sublet <br />to students.
            </p>
        )

        
    }
    return (
        <div className = "col AuthInfo">
            {information}
            <img className = "informationImage" src = {browse} alt = "Browse" />
            
        </div>


    )
    }
export default AuthInfo;