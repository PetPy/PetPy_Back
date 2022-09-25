const express = require("express");
const app = express();
app.use("/public", express.static("public"));
let port = 8080;
app.listen(port, function () {
	console.log("listening on " + port);
});

function isLogin(req, res, next) {
	if (req.user) next();
	else res.render("login.ejs");
}

app.get("/", isLogin, (req, res) => {
	res.render("home.ejs");
});

app.get("/register", (req, res) => {
	res.render("register.ejs");
});
