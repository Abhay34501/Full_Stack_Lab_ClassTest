const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// In-memory book storage
let books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: 'Wings of Fire', author: 'A. P. J. Abdul Kalam' }
];

// Q3: Custom authentication middleware
function requireAuth(req, res, next) {
    if (req.headers['x-api-key'] !== 'secret123') {
        return res.status(401).json({
            error: 'Unauthorized: Invalid or missing API key'
        });
    }

    next();
}

// Q4: GET all books (public)
app.get('/api/books', (req, res) => {
    res.status(200).json(books);
});

// Q4: POST a new book (authentication required)
app.post('/api/books', requireAuth, (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            error: 'Title and author are required'
        });
    }

    const newBook = {
        id: books.length
            ? Math.max(...books.map(book => book.id)) + 1
            : 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// Q4: DELETE a book by ID
app.delete('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Book not found'
        });
    }

    const deletedBook = books.splice(index, 1)[0];

    res.status(200).json({
        message: 'Book deleted successfully',
        book: deletedBook
    });
});

// Q5: GET a single book safely
app.get('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            error: 'Book not found'
        });
    }

    res.status(200).json(book);
});

// Handle invalid JSON and other errors
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    const status = err.status || 500;

    res.status(status).json({
        error: status === 400
            ? 'Invalid JSON request body'
            : 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

