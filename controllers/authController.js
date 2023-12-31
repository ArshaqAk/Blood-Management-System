const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken')

// const registerController =async(req,res)=>{
//     try {
//         const existingUser = await userModel.findOne({email:req.body.email})
//         //validation
//         if(existingUser){
//             return res.status(200).send({
//                 success:false,
//                 message:'User is already exists'
//             })
//         }
//         const salt= await bcrypt.genSalt(10)
//         const hashedPassword= await bcrypt.hash(req.body.password,salt)
//         req.body.password= hashedPassword
//         //rest data
//         const user = new userModel(req.body)
//         await user.save()
//         return res.status(201).send({
//             success:true,
//             message:'User Registered Successfully',
//             user,
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:'Error in register Api',error
//         })
        
//     }
// };
const registerController = async (req, res) => {
    try {
      const exisitingUser = await userModel.findOne({ email: req.body.email });
      //validation
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "User ALready exists",
        });
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
      //rest data
      const user = new userModel(req.body);
      await user.save();
      return res.status(201).send({
        success: true,
        message: "User Registerd Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Register API",
        error,
      });
    }
  };



//login call back
const loginController =async(req,res)=>{
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Invalid credentials'
            })
        }

        //check roole
        if(user.role !== req.body.role){
            return res.status(500).send({
                success:false,
                message:'role doesnt match',
            })
        }

        //compare password
        const comparePasswod= await bcrypt.compare(req.body.password,user.password)
        if(!comparePasswod){
            return res.status(500).send({
                success:false,
                message:'Invalid credentials'
            })
        }
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1d",})
        return res.status(200).send({
            success:true,
            message:'Login successful',
            token,
            user,
        })
    
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login Api',
            error
        })
    }
};

//Get current user
const currentUserController =async(req,res)=>{
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        return res.status(200).send({
            success:true,
            message:'User Fetch successfully',
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'unable to get current user',
            error
        })
    }
}

module.exports = {registerController,loginController,currentUserController}