import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}

const UncontrolledOnOffMemo = (props: PropsType) => {

    const [on, setOn] = useState(false);
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: on ? "green" : "white"

    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "3px",
        backgroundColor: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    const clickSetOn = () => {
        setOn(true);
        props.onChange(true);
    }
    const clickSetOff = () => {
        setOn(false);
        props.onChange(false);
    }

    return (

        <div>

            <div style={onStyle} onClick={clickSetOn}>On
            </div>
            <div style={offStyle} onClick={clickSetOff}>Off
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

export const UncontrolledOnOff = React.memo(UncontrolledOnOffMemo);
