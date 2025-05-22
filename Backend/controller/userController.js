const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const generateToken = require('../helperFunctions/TokenGenerate');

//Register a new user
const userSignup = async (req,res)=>{
    try{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "Please fill all the fields"});
    }

    if(password.length < 8){
        return res.status(400).json({message: "Password should be at least 8 characters"});
    }

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    await user.save();

    res.status(201).json({message: "User created successfully"});
}
catch(error){
    console.error(error);
    res.status(500).json({message: "Internal server error"});
}
};

//Login a user
const userLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Please fill all the fields"});
        }

        const isUserExists = await User.findOne({email});
        if(!isUserExists){
            return res.status(400).json({message: "User does not exist"});
        }

        const isPasswordCorrect = await bcrypt.compare(password, isUserExists.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Incorrect password"});
        }

        const token = generateToken({id: isUserExists._id, name: isUserExists.name});
        if(!token){
            return res.status(500).json({message: "Token generation failed"});
        }

        res.cookie('token',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({message:"Login Successful"});

    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }   
}

module.exports = { userSignup, userLogin };