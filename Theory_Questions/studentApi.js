const express = require('express');
const app = express();

// Sample data
const students = [
    { id: 1, name: 'John Doe', age: 22 },
    { id: 2, name: 'Jane Smith', age: 20 },
    { id: 3, name: 'Emily Jones', age: 21 },
];

// Define the /students route
app.get('/students', (req, res) => {
    res.json(students);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
