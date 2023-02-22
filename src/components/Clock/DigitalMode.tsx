import digitalStyle from "./DigitalClock.module.css";
import React from "react";
import {get2DigreeTime, TimeModeType} from "./Clock";

export const DiditalMode = (props: TimeModeType) => {

    return (
        <div className={digitalStyle.clock}>
            <span>{get2DigreeTime(props.time.getHours())}</span>
            :
            <span>{get2DigreeTime(props.time.getMinutes())}</span>
            :
            <span>{get2DigreeTime(props.time.getSeconds())}</span>
            {props.time.getHours() > 0 && props.time.getHours() <= 12 ? 'AM' : 'PM'}
        </div>
    );
}