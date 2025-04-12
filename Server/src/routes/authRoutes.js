const express = require("express");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const User = mongoose.model('User');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

router.post("/signup", async (req, res) => {
  
  try{

      console.log(req.body);
      const {email, password} = req.body;

      const user = new User({email : email, password:password});
      await user.save();
      const token = jwt.sign({userId : user._id, }, 'MY_SECRET_KEY');
      res.send({token:token});  
  }
  catch(error){
    res.status(422).send(error.message);

  }
});
router.post("/signin", async(req,res)=>{
    const {email, password} = req.body;
   
    if (!email || !password){
      return res.status(422).send({error:"Email or Password is empty"});
    }
    const user= await User.findOne({email:email});
    if (!user){
      return res.status(404).send({error:"Email Not Found"});
      
    }
    try{
       console.log(req.body);
       await user.comparePassword(password, user.password);
       const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
       res.send({token:token});
    }
    catch(err){
      return res.status(422).send({error : "Invalid user or password"});
    }
     
})


module.exports = router;

