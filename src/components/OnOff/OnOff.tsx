import React from 'react';
import classes from './OnOff.module.css';
type OnOffType = {
    on: boolean
    off:boolean
}


const OnOff = (props:OnOffType) => {

    return (
        <div>
            <button className={`${props.on && classes.green}`}>on</button>
            <button className={`${props.off && classes.red }`}>off</button>
            <button className={`${classes.radius} ${props.on ? classes.green : classes.red}`}>o</button>
            {/*{props.on ? <button style={{backgroundColor:"green"}}>on</button>  : <button >on</button>}*/}
            {/*{props.off ? <button style={{backgroundColor:"red"}}>off</button> : <button >off</button>}*/}
            {/*{props.on ? <button style={{backgroundColor:"green", borderRadius:"50%"}}>o</button> : <button style={{backgroundColor:"red",borderRadius:"50%"}}>o</button>}*/}
        </div>
    )
}
export default OnOff;
