import React, {useEffect, useState} from "react";


const Example1 = () => {
    console.log('Example1');

    // const initialValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

        console.log('useEffect')
        debugger
        document.title = counter.toString()

    })



    return (
        <>
            Hi, {counter}!
            <button onClick={() => setCounter(counter + 1)}>+</button>

        </>
    )
}
export const UseEffectExample = React.memo(Example1);

