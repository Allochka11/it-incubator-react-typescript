import React, {ChangeEvent, useState} from "react";

type ControlledSelectType = {}

export const ControlledSelect = (props: ControlledSelectType) => {
    const [parentValue, setParentValue] = useState<undefined| string>('1')
    const onChange = (e:ChangeEvent<HTMLSelectElement>)=> {
        setParentValue(e.currentTarget.value)
    };

    return(
        <select value={parentValue} onChange={onChange}>
            <option value="">none</option>
            <option value="1">Kiev</option>
            <option value="2">Madagascar</option>

        </select>
    );
};