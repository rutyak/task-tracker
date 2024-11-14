const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const taskRouter = require("./routes/task");
const authRouter = require("./routes/authentication");
require("dotenv").config();


app.use(express.json());
app.use(cors()); 


const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL).then(() => {
  console.log("Connection established !!");
});

app.use(taskRouter);
app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
