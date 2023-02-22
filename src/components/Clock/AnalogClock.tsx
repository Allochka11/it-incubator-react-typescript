import analogStyle from "./AnalogClock.module.css";
import React from "react";
import {TimeModeType} from "./Clock";

export const AnalogMode = (props: TimeModeType) => {

    return(
        <div className={analogStyle.clock}>
            <div
                className={analogStyle.hour_hand}
                style={{
                    transform: `rotateZ(${props.time.getHours() * 30}deg)`
                }}
            />
            <div
                className={analogStyle.min_hand}
                style={{
                    transform: `rotateZ(${props.time.getMinutes() * 6}deg)`
                }}
            />
            <div
                className= {analogStyle.sec_hand}
                style={{
                    transform: `rotateZ(${props.time.getSeconds() * 6}deg)`
                }}
            />
            <span className={analogStyle.twelve}>12</span>
            <span className={analogStyle.one}>1</span>
            <span className={analogStyle.two}>2</span>
            <span className={analogStyle.three}>3</span>
            <span className={analogStyle.four}>4</span>
            <span className={analogStyle.five}>5</span>
            <span className={analogStyle.six}>6</span>
            <span className={analogStyle.seven}>7</span>
            <span className={analogStyle.eight}>8</span>
            <span className={analogStyle.nine}>9</span>
            <span className={analogStyle.ten}>10</span>
            <span className={analogStyle.eleven}>11</span>
        </div>
    );
};