import React, { useEffect, useState } from 'react';

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        async function fetchBooks() {
            try {
                const response = await fetch(
                    'http://localhost:5000/api/books',
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }

                const data = await response.json();
                setBooks(data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError('Unable to load books. Please try again.');
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchBooks();

        return () => controller.abort();
    }, []);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p role="alert">{error}</p>;
    if (books.length === 0) return <p>No books available.</p>;

    return (
        <div>
            <h2>Book List</h2>

            {books.map(book => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BookList;
