const express = require("express");
const baseRouter = require("./routes/baseRouter");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/", baseRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
