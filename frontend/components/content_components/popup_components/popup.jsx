import React from "react";
import {useState, useEffect, useRef} from "react";


const Popup = (props) => {

    const [showing, setShowing] = useState(false)

    useEffect(() => {
        props.receiveResponse();

    }, [])
    
    useEffect(() => {
        if (props.response[0]) {
            setShowing(true)
            setTimeout(() => setShowing(false), 2000)
            setTimeout(() => props.clearResponse(), 3001)
            
        }
    }, [props.response[0]])

    return (
        <>
         <p  className={`popup ${showing ? "popup-shown" : "popup-hidden"}`}> {`${props.response}`} </p>
            
        </>
        
            
    )

}

export default Popup