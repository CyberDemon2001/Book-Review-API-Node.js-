const {addReview, updateReview, deleteReview} = require("../controller/reviewController")
const authenticateToken = require("../Middlewares/authenticateToken");
const router = require("express").Router();

router.post("/books/:id/reviews", authenticateToken, addReview);
router.put("/reviews/:id", authenticateToken, updateReview);
router.delete("/reviews/:id", authenticateToken, deleteReview);

module.exports = router;