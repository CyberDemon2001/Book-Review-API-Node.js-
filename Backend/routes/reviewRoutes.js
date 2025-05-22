const {addReview} = require("../controller/reviewController")
const authenticateToken = require("../Middlewares/authenticateToken");
const router = require("express").Router();

router.post("/books/:id/addreviews", authenticateToken, addReview);

module.exports = router;