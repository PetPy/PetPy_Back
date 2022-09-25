const express = require("express");
const app = express();
app.use("/public", express.static("public"));
let port = 8080;
app.listen(port, function () {
	console.log("listening on " + port);
});

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
	res.render("login.ejs");
});
