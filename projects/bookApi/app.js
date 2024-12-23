const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

let books = require('./books.json');

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);

    // Save the new book to books.json file
    fs.writeFile('./books.json', JSON.stringify(books, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save the book' });
        }
        res.status(201).json(newBook);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
