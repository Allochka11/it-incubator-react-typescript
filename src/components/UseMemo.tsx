import React, {useMemo, useState} from "react";

type UseMemoType = {}

export const UseMemo = (props: UseMemoType) => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{

        let tempResultA = 1;
        for (let i = 1; i <= a ; i++) {
            let fake = 0;
            while (fake < 100000) {
                fake++
                const fakeValue = Math.random();
            }

            tempResultA = tempResultA * i
        }
        return tempResultA;

    }, [a]);


    resultB = useMemo(()=>{
        let tempResultB= 1;
        for (let i = 1; i <= b; i++) {
            let fake = 1;
            while (fake < 100000) {
                fake++;
                let fakeRundom = Math.random();
            }

            tempResultB = tempResultB * i;
        }
        return tempResultB;
    }, [b])





    
    return(
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)} type="text"/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} type="text"/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    );
};
const NewMessagesCounter = (props: { count: number }) => {
    console.log('render Counter');
    return <div>{props.count}</div>
}
export const UsersSecret = (props: { users: string[] }) => {
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