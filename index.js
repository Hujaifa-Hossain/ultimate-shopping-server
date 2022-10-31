const express = require('express');
const cors = require('cors');
const routes = require('./routes/route')
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})