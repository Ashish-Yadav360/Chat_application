import jwt from "jsonwebtoken";

export const genereateTokenAndSetCookie=(userid, res)=>{
  const token = jwt.sign({userid}, process.env.JWT_SECRET,{
    expiresIn :"15d",
  });
  res.cookie('cookies',token,{
    expiresIn : 15 *24 *60*60 *1000, //ms
    httpOnly :true,  //prevent xss or cross site scripting attacks.
    sameSite :"strict",
    secure: process.env.NODE_ENV !=="development",
  });
}
