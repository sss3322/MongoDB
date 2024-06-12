const express = require('express');
const cors = require("cors")

const connection =require("./Configuration/Mongo");
const router = require('./Router/Router1');
const dotenv = require('dotenv');
connection()
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config()
app.use("/",router)
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
