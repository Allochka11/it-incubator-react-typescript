 import React, { useState } from 'react';
import classes from './OnOff.module.css';
type OnOffType = {
    // on: boolean
}


const OnOff = (props:OnOffType) => {
    console.log('OnOff rendering')

    const [on,setOn]=useState(false);
    const onStyle = {
        width: "30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: on ? "green" : "white"

    };
    const offStyle = {
        width: "30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height:"10px",
        border:"1px solid black",
        borderRadius:"50%",
        display:"inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
            {/*<button className={`${props.on && classes.green}`}>on</button>*/}
            {/*<button className={`${props.off && classes.red }`}>off</button>*/}
            {/*<button className={`${classes.radius} ${props.on ? classes.green : classes.red}`}>o</button>*/}
            {/*{props.on ? <button style={{backgroundColor:"green"}}>on</button>  : <button >on</button>}*/}
            {/*{props.off ? <button style={{backgroundColor:"red"}}>off</button> : <button >off</button>}*/}
            {/*{props.on ? <button style={{backgroundColor:"green", borderRadius:"50%"}}>o</button> : <button style={{backgroundColor:"red",borderRadius:"50%"}}>o</button>}*/}
        </div>
    )
}
export default OnOff;
