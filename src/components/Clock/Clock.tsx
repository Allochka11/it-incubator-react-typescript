import React, {useEffect, useState} from "react";
import analogStyle from './AnalogClock.module.css';
import digitalStyle from './DigitalClock.module.css';
import {AnalogMode} from "./AnalogClock";
import {DiditalMode} from "./DigitalMode";

type ClockType = {
    mode?: 'analog' | 'digital'

}

export const get2DigreeTime = (time:number) => time < 10 ? '0' + time : time;

export const Clock = (props: ClockType) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let id = setInterval(()=>{
            setTime(new Date());
        },1000)
        return ()=> {
            clearInterval(id)
        }

    },[]);


    let view;

    switch (props.mode) {
        case ('analog'):
            view = <AnalogMode time={time}/>
            break;
        case ('digital'):
        default:
            view = <DiditalMode time={time}/>
    }

    return(
        <div>
            {view}
        </div>
    );
};

export type TimeModeType = {
    time: Date
}
