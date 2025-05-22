const jwt = require("jsonwebtoken");

const generateToken = ({id,name})=>{
    try{
        const secretKey = process.env.JWT_SECRET;
        if(!secretKey){
            throw new Error("JWT secret key is not defined");
        }

        const payload = { id, name };
        const options = { expiresIn: process.env.JWT_EXPIRATION };
        const token = jwt.sign(payload, secretKey, options);
        return token;
    }
    catch(error){
        console.error("Error generating token:", error);
        return null;
    }
}

module.exports = generateToken;