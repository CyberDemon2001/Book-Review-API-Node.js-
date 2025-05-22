const Book = require("../models/BookSchema");
const Review = require("../models/ReviewSchema");

// Function to create a new book
const createBook = async (req, res) => {
  try {
    const { title, author, genre, description,averageRating } = req.body;
    if (!title || !author || !genre || !description || !averageRating) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res.status(400).json({ message: "Book already exists" });
    }

    const newBook = new Book({
      title,
      author,
      genre,
      description,
      averageRating
    });

    await newBook.save();
    res.status(201).json({ message: "Book created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const { page = 1, limit = 5, author, genre } = req.query;

    const query = {};
    if (author){
      query.author = author;
    }
    if (genre){
      query.genre = genre;
    }
    console.log(query);
    const totalBooks = await Book.countDocuments(query);
    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json({
      message: `${totalBooks} Books fetched successfully`,
      page: parseInt(page),
      limit: parseInt(limit),
      books
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBookById = async (req, res) => {
  try{
    const { id } = req.params;
    const {page = 1,limit = 5} = req.query;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    const totalReviews = await Review.countDocuments({ book: id });
    const reviews = await Review.find({ book: id })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found" });
    }
    res.status(200).json({
      message: `${totalReviews} Reviews fetched successfully`,
      page: parseInt(page),
      limit: parseInt(limit),
      book,
      reviews
    });
  }
  catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById
};