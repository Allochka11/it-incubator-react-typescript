import React, {useEffect, useState} from "react";
import analogStyle from './AnalogClock.module.css';
import digitalStyle from './DigitalClock.module.css';

type ClockType = {
    analog?: boolean,
    digital?: boolean
}

const get2DigreeTime = (time:number) => time < 10 ? '0' + time : time;

export const Clock = (props: ClockType) => {

    const [time, setTime] = useState(new Date());

    useEffect(()=>{

        let id = setInterval(()=>{
            console.log('tick', id)
            setTime(new Date())

        },1000);

        return ()=>{
            clearInterval(id);
        }

    },[])

    console.log(props)
    return(


        <div>
            {props.analog || props.digital ?
                props.analog
                    ? <AnalogMode time={time}/>
                    : <DiditalMode time={time}/>
            : <div>
                    <span>{get2DigreeTime(time.getHours())}</span>
                    :
                    <span>{get2DigreeTime(time.getMinutes())}</span>
                    :
                    <span>{get2DigreeTime(time.getSeconds())}</span>
                </div>

            }
        </div>
    );
};

type TimeModeType = {
    time: Date
}

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
export const DiditalMode = (props: TimeModeType) => {

    return(
        <div className={digitalStyle.clock}>
            <span>{get2DigreeTime(props.time.getHours())}</span>
            :
            <span>{get2DigreeTime(props.time.getMinutes())}</span>
            :
            <span>{get2DigreeTime(props.time.getSeconds())}</span>
            {props.time.getHours() > 0 && props.time.getHours() <= 12  ? 'AM' : 'PM'}
        </div>
    );
};