const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
    "mongodb://localhost:27017/topicaldb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Connected to the DB")
);

app.use("/user", require("./routes/userRouter.js"));
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use("/api/post", require("./routes/postRouter.js"));
app.use("/api/topic", require("./routes/topicRouter.js"));

app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
    console.log("The server is running on port 9000");
});
