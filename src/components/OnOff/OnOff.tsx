import React from 'react';
type OnOffType = {
    on: boolean
    off:boolean
}


const OnOff = (props:OnOffType) => {

    return (
        <div>
            {props.on ? <button style={{backgroundColor:"green"}}>on</button>  : <button >on</button>}
            {props.off ? <button style={{backgroundColor:"red"}}>off</button> : <button >off</button>}
            {props.on ? <button style={{backgroundColor:"green", borderRadius:"50%"}}>o</button> : <button style={{backgroundColor:"red",borderRadius:"50%"}}>o</button>}
        </div>
    )
}
export default OnOff;
