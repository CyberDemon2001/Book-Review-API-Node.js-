const { createBook,getAllBooks,getBookById } = require("../controller/bookController");
const authenticateToken = require("../Middlewares/authenticateToken");

const router = require("express").Router();

router.post("/createBook", authenticateToken, createBook);
router.get("/getAllBooks", authenticateToken, getAllBooks);
router.get("/getBookById/:id", authenticateToken, getBookById);

module.exports = router;