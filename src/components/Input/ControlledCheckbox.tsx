import React, {ChangeEvent, useState} from "react";

type ControlledCheckboxType = {}

export const ControlledCheckboxMemo = (props: ControlledCheckboxType) => {

    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked);

    return (
        <div>
            <input type="checkbox" checked={parentValue} onChange={onChange}/>
        </div>
    );
};

export const ControlledCheckbox = React.memo(ControlledCheckboxMemo);
