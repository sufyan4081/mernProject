const express = require('express');
const app = express();

const port = 8000;

// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
