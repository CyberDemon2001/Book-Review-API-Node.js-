const Review = require("../models/ReviewSchema");

const addReview = async (req, res) => {
    const {id} = req.params;
    const userId=req.user.id;
    const { rating, comment } = req.body;

    try {
        if (!rating || !comment) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const existingReview = await Review.findOne({ user: userId, book: id });
        if (existingReview) {
            return res.status(400).json({ message: "You have already reviewed this book" });
        }
        const newReview = new Review({
            user: userId,
            book: id,
            rating,
            comment
        });

        await newReview.save();
        res.status(201).json({ message: "Review added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateReview = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const { rating, comment } = req.body;

    try {
        const existingReview = await Review.findOne({ user: userId, _id: id });
        if (!existingReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        existingReview.rating = rating;
        existingReview.comment = comment;

        await existingReview.save();
        res.status(200).json({ message: "Review updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteReview = async (req, res) => {
    const {id} = req.params;
    const userId=req.user.id;
    try {
        const existingReview = await Review.findOne({ user: userId, _id: id });
        if (!existingReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        await existingReview.deleteOne();
        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {
    addReview,
    updateReview,
    deleteReview
};