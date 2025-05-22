const { createBook,getAllBooks,getBookById, searchBooks } = require("../controller/bookController");
const authenticateToken = require("../Middlewares/authenticateToken");

const router = require("express").Router();

router.post("/books", authenticateToken, createBook);
router.get("/books", authenticateToken, getAllBooks);
router.get("/books/:id", authenticateToken, getBookById);
router.get("/search", authenticateToken, searchBooks);

module.exports = router;