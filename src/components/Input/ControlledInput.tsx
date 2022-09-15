import React, {ChangeEvent, useState} from "react";

type ControlledInput = {}

const ControlledInputMemo = (props: ControlledInput) => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value);

    return (
        <div>
            <input type="text" value={parentValue} onChange={onChange}/>
        </div>
    );
};

export const ControlledInput = React.memo(ControlledInputMemo);
