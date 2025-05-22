const { createBook,getAllBooks,getBookById } = require("../controller/bookController");
const authenticateToken = require("../Middlewares/authenticateToken");

const router = require("express").Router();

router.post("/books", authenticateToken, createBook);
router.get("/books", authenticateToken, getAllBooks);
router.get("/books/:id", authenticateToken, getBookById);

module.exports = router;