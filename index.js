require("dotenv").config();
const express = require("express");
const connection = require("./database/connection");
const routes = require('./routes/route')
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(routes)

// database connection
connection();

// http server 
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
