const express = require("express");
const ussdRoute = require("./routers/ussd");
const userRoute = require("./routers/userRouter");
const messageRouter = require('./routers/messageRouter');
const { dbConnect } = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", ussdRoute);
app.use("/user", userRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
