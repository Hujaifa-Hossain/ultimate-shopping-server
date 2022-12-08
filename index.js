require("dotenv").config();
const express = require("express");
const connection = require("./database/connection");
const productRouter = require("./routes/product_route");
const authRouter = require("./routes/auth_route");
const userRouter = require("./routes/user_route");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// ROUTES
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

// DATABASE
connection();

// HTTP SERVER
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
