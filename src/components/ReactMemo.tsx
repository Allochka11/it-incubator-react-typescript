import React, {useState} from "react";

const NewMessagesCounter = (props: { count: number }) => {
    console.log('render Counter');
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: string[] }) => {
    console.log('render Users');
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret);
const Counter = React.memo(NewMessagesCounter);


const Example1Memo = () => {
    console.log('render Example');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alla', 'Vladymyr', 'Markisa'])

    const addUser = () => {
        let newUser = [...users, 'Komar' + new Date().getDate()];
        setUsers(newUser);
    }
    users.push('Komar' + new Date().getDate());
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Users</button>
            <Counter count={counter}/>
            <Users users={users}/>
        </>
    )
}
export const Example1 = React.memo(Example1Memo);

