import React from 'react';

type OnOffType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOffMemo = (props: OnOffType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: props.on ? "green" : "white"

    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: !props.on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    };
    // console.log(props.on)
    return (

        <div>
            <div style={onStyle} onClick={() => {
                props.setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.setOn(false)
            }}>Off
            </div>
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


export const OnOff = React.memo(OnOffMemo);
