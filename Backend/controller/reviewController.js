const Review = require("../models/ReviewSchema");

const addReview = async (req, res) => {
    const {id} = req.params;
    const uerId=req.user.id;
    const { rating, comment } = req.body;

}