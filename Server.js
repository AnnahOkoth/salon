const express = require('express');
const app = express();
const db = require('./db');
const routes = require('./Routes');

app.use(express.json());
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
