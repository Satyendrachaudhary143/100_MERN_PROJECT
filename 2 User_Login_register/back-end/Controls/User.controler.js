import { User } from "../Modules/User.Module.js";


export const registerUser = async (req, res) => {
   const { name, email, mobile, password } = req.body;
    try {
        if (!name || !email || !mobile || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
            
        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).json({
                message: "User Allready exist",
                success: false
            })
        }
        const user = await User.create({
            name,
            email,
            mobile,
            password
        })
        res.status(200).json({
            message: "User created",
            success: true,
            data: user
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {

    try {
        
        const { email, password } = req.body;
        if ( !email | !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
    
        const userEmail = await User.findOne({ email });
        if (!userEmail) {
            return res.status(400).json({
                message: "User not Found",
                success: false,
               
            })
        }
        if (userEmail) {
            if (password === userEmail.password) {
                
                return res.status(200).json({
                    message: "login success",
                    success: true,
                  user:  userEmail.name
                })
            }
            else {
                return res.status(400).json({
                    message: "Wrong password",
                    success: false
                })
            }
        }
    } catch (error) {
        console.log(error);
        
    }

}