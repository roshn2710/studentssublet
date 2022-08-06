import React from "react";

import "./Background.css"
const Background = (props) => {
    const styles = {}
    if(props.width) {
        styles.width = props.width
    }
    
    return (
        <div className = "Background d-flex">
            <div className = "container-fluid background-container" styles = {styles}>
                    {props.children}
            </div>  

        </div>

    )

}
export default Background;