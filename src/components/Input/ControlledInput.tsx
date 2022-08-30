import React, {ChangeEvent, useState} from "react";

type ControlledInput = {}

export const ControlledInput = (props: ControlledInput) => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.value);

    return(
        <div>
            <input type="text" value={parentValue} onChange={onChange}/>
        </div>
    );
};