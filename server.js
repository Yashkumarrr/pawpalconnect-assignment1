const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js + GitHub Actions CI/CD pipeline!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
