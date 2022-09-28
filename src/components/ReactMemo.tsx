import React, {useMemo, useState} from "react";

const NewMessagesCounter = (props: { count: number }) => {
    console.log('render Counter');
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: string[] }) => {
    console.log('render Users secret');
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret);


const HelpsToReactMemo = () => {
    console.log('render Helps');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alla', 'Vladymyr', 'Markisa'])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users]);
    const addUser = () => {
        let newUser = [...users, 'Komar' + new Date().getDate()];
        setUsers(newUser);
    }
    users.push('Komar' + new Date().getDate());

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Users</button>

            {counter}
            <Users users={newArray}/>
        </>
    )
}
export const Example1 = React.memo(HelpsToReactMemo);

