const express = require("express");
const { resolve } = require("path");

const app = express();

app.use(express.static(resolve(process.cwd(), "public")));
app.use("/js", express.static(resolve(process.cwd(), "dist")));

app.listen(3000, () => {
     console.log("Started at http://localhost:3000")
}) 