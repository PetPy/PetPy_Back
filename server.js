const express = require("express");
const app = express();
app.use("/public", express.static("public"));
app.use("/", require("./routes/router"));
app.set("view engine", "ejs");
app.listen(8080, function () {
	console.log("listening on 8080");
});
