var router = require("express").Router();
function isLogin(req, res, next) {
	if (req.user) next();
	else res.render("login.ejs");
}
router.get("/", isLogin, (req, res) => {
	res.render("home.ejs");
});
router.get("/register", (req, res) => {
	res.render("register.ejs");
});
module.exports = router;
