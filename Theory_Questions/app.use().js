// app.use() in an Express app is a function used to set up middleware, which are functions that have access to the request and response objects. Middleware can perform tasks like logging, authentication, or modifying request objects.

// Here's an example:

// javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// In this example, app.use() sets up a logging middleware that logs each request method and URL. The next() function passes control to the next middleware or route handler.