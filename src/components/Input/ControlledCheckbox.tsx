import React, {ChangeEvent, useState} from "react";

type ControlledCheckboxType = {}

export const ControlledCheckbox = (props: ControlledCheckboxType) => {

    const [parentValue, setParentValue] = useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>setParentValue(e.currentTarget.checked);

    return(
        <div>
            <input type="checkbox" checked={parentValue} onChange={onChange}/>
        </div>
    );
};