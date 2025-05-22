const mongoose= require('mongoose');
const dotenv = require('dotenv').config();

const mongoconnect=()=>{mongoose.connect(process.env.MONGO_URI, {})
.then(() => {
    console.log('MongoDB connected');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});
};

module.exports = mongoconnect;