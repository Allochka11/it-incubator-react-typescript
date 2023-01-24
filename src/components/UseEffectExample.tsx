import React, {useEffect, useState} from "react";


const Example1 = () => {
    console.log('Example1');

    // const initialValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);
    useEffect(()=>{
        console.log('useEffect every time')
        document.title = counter.toString()
    })

    useEffect(()=>{
        console.log('useEffect 1 time')
        document.title = counter.toString()
    },[])
    useEffect(()=>{
        console.log('useEffect only when counter changed')
        document.title = counter.toString()
    },[counter])



    return (
        <>
            Hi, {counter}!
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>

        </>
    )
}
const SetTimeout = () => {
    console.log('Example1');

    // const initialValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);



    useEffect(()=>{
        //
        // let date = new Date();
        // setInterval(()=>{
        //     console.log('interval')
        //     setHours(date.getHours());
        //     setMinutes(date.getMinutes());
        //     setSeconds(date.getSeconds());
        // }, 1000)
    },[seconds])



    return (
        <>
            {/*Hi, {counter}!*/}
            {hours}:{minutes}:{seconds < 10 ? '0' + seconds : seconds}
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}

        </>
    )
}

export const UseEffectExample = React.memo(SetTimeout);

