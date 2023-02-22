import React, {useEffect, useState} from "react";


export const Example1 = () => {

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


export const UseEffectExample = React.memo(Example1);

