import User from "../Models/User.Model.js";
import bycrpt from "bcryptjs";
import { genereateTokenAndSetCookie } from "../Utils/Jsonwebtokens.js";
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassowrd, gender } = req.body;
    if (password !== confirmpassowrd) {
      return res.status(400).json({ error: "passwords do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "username already exist" });
    }
    // HASH PASSWORD HERE
    const key = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, key);

    // GETTING PROFILE PIC
    const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //CREATING NEW USER
    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilepic: gender === "male" ? boyprofilepic : girlprofilepic,
    });
    if (newUser) {
        // GENERATE JWT TOKEN.
      genereateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      console.log("new User inserted", newUser);
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        gender: newUser.gender,
        profilepic: newUser.profilepic,
      });
    } else {
      res.status(400).json({ message: "Invalid User data" });
    }
  } catch (error) {
    console.log("Error in Sign Up controller", error.message);
    res.status(500).json({ Error: "Internal server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const ispasswordcorrect = await bycrpt.compare(password, user?.password|| "");
    if(!user || !ispasswordcorrect){
      res.status(401).json({message:"Incorrect Login Credenatials"});
    }else{
      genereateTokenAndSetCookie(user._id,res);
       res.status(200).json({
        _id: user._id,
        fullname: user.fullname,
        username: user.username,
        gender: user.gender,
        profilepic: user.profilepic,
       })
    }
  } catch (error) {
    console.log("some Error Occured", error.message);
    res.status(500).json({ error: "Internal server Error" });
  }
};

export const logout = (req, res) => {
  try{
    res.cookie('cookies',"",{maxAge:0});
    res.status(200).json({message:"logged out succesfully"});

  }catch (error) {
    console.log("Error in Log out controller", error.message);
    res.status(500).json({ Error: "Internal server Error" });
  }
};
