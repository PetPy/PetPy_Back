const express = require("express");
const app = express();

let port = 8080;
app.listen(port, function () {
	console.log("listening on " + port);
});

app.get("/", function (req, res) {
	res.send("PetPy Homepage");
});
