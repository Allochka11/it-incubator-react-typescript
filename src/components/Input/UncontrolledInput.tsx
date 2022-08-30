import React, {useRef, useState} from "react";

type InputType = {}

export const Input = (props: InputType) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        console.log(el.value)
        setValue(el.value)
    }

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={save}>save</button>
            actual value : {value}

        </div>
    );
};