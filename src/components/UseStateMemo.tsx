import React, {useMemo, useState} from "react";


function generateData () {
    console.log('generateData')
    return 3737737337;
}

const Example1 = () => {
    console.log('Example1');

    // const initialValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(0);

    function changer (state:number) {

        console.log('changer' + state);
        // debugger
        return state +1;
    }


    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </>
    )
}
export const Example2 = React.memo(Example1);

