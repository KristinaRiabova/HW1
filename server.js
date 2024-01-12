const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
//http://localhost:3000/api/data