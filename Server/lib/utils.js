import jwt from "jsonwebtoken"

//fn for token genrate for user

export const generateToken = (userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET);
    return token;
}