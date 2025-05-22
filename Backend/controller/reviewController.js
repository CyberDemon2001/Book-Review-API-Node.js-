const Review = require("../models/ReviewSchema");

const addReview = async (req, res) => {
    const {id} = req.params;
    const uerId=req.user.id;
    const { rating, comment } = req.body;

    try {
        if (!rating || !comment) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const newReview = new Review({
            user: uerId,
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

module.exports = {
    addReview
};