const express = require('express');
const dotenv = require('dotenv').config();
const mongoconnect = require('./mongodb');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT= process.env.PORT || 3001;

app.use('/api',userRoutes);
app.use('/api',bookRoutes);
app.use('/api',reviewRoutes);

app.get('/',(req,res)=>{
    res.send('Healthy Server');
});

mongoconnect();

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
