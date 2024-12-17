const express = require('express');
const app = express();

const keepAliveInterval = 60000; // 1 minute

setInterval(() => {
  // Keep the server alive and prevent idle timeouts.
  console.log('Keeping server alive...');
}, keepAliveInterval);

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello');
  }, 5000); 
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});