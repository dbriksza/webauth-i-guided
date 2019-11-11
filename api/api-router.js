const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

const bcrypt = require("bcryptjs");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});

router.post("/hash", (req, res) => {
  let salt = bcrypt.genSalt(15);
  let hash = bcrypt.hashSync(req.password, salt);
});

module.exports = router;
