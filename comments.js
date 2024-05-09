// Create web server
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 3000;
const HOST = 'localhost';

// Import routes
const comments = require('./routes/comments');

// Middleware
app.use(express.json());

// Routes
app.use('/comments', comments);

// Start server
server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});

// Path: routes/comments.js
const express = require('express');
const router = express.Router();

// Dummy data
let comments = [
    { id: 1, username: 'Alice', comment: 'Hello!' },
    { id: 2, username: 'Bob', comment: 'Hi!' },
    { id: 3, username: 'Charlie', comment: 'Hey!' },
];

// Get all comments
router.get('/', (req, res) => {
    res.json(comments);
});

// Get a single