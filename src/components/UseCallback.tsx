import React, {useCallback, useMemo, useState} from "react";

export const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log('BooksSecret');
    return (
        <div>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}
            <button onClick={props.addBook}>add book</button>

        </div>
    )
}
const Book = React.memo(BooksSecret);


export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    // const newArray = useMemo(() => {
    //     const newArray = books.filter(b => b.toLowerCase().indexOf('s') > -1);
    //     return newArray
    //
    // }, [books]);

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log('add')
            let newBook = [...books, 'Angular' + new Date().getDate()];
            setBooks(newBook);
        }
    }, [books]);
    const memoizedAddBook2 = useCallback(() => {
        console.log('add1')
        let newBook = [...books, 'Angular' + new Date().getDate()];
        setBooks(newBook);
    }, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <Book books={books} addBook={memoizedAddBook2}/>
        </>
    )
}