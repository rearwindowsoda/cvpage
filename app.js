const express = require("express");
const path = require("path");
const app = express();

//middleware
app.use(express.static(path.join(__dirname + "/public")));

app.listen(3000, () => {
  console.log("Server started on port 3000. \n ", "http://localhost:3000");
});
