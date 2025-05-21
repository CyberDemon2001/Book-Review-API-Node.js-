const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
app.use(express.json());

const PORT= process.env.PORT || 3001;

app.get('/',(req,res)=>{
    res.send('Healthy Server');
});

app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
