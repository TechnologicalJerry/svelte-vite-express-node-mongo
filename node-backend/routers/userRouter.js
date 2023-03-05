const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

const app = express();

router.get("/userlist", usersController.usersList);
router.post("/creatUser", usersController.creatUser);

module.exports = router;
