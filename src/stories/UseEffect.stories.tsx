import React, {useEffect, useState} from 'react';
import {Example1, UseEffectExample} from "../components/UseEffectExample";

export default {
    title: 'UseEffect',
    component: UseEffectExample
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1);
    // console.log('setTimeout')
    useEffect(()=>{
        // console.log('setTimeout useEffect counter', counter)
        setInterval(()=>{
            setCounter((state) => state +1)
        },3000)

    },[]);

    return (
        <>
        Hello, counter : {counter}
        </>
    )
}
export const ResetUseEffectExample = () => {
    const [counter, setCounter] = useState(1);
    console.log('Component rendered' + counter )

    useEffect(()=>{
        console.log('Effect ocurred' + counter)

        return ()=>{
            console.log('reset' + counter)
        }
    }, [counter])

    const increase = () => setCounter(counter + 1);
    return (
        <>
            Hello, counter : {counter}
            <button onClick={increase}>+</button>
        </>
    )

}
export const KeyUseEffectExample = () => {
    const [text, setText] = useState('');

    useEffect(()=>{
        const handler = (e: KeyboardEvent) =>{
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        return ()=>{
            window.removeEventListener('keypress', handler)
        }
    },[text])

    return (
        <>
            Hello, counter : {text}
        </>
    )

}

export const SetTimeoutExample = () =>{
    const [text, setText] = useState('');
    useEffect(()=>{
        const id = setTimeout(()=>{
            console.log(id)
            setText('3 seconds passed')
        },3000);

        return ()=>{
            clearTimeout(id)
        }

    },[text])

}
