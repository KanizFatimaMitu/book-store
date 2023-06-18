import React, { useEffect, useState } from 'react';
import Card from './Card';

const BookCard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            {
                books.map(book => <Card
                    book={book}
                    books={books}
                    setBooks={setBooks}
                ></Card>)
            }

        </div>
    );
};

export default BookCard;