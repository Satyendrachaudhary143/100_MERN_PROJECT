import { useState } from "react";
import axios from "axios"
import { URL } from "../utils/Content";
import { Link, useNavigate } from "react-router-dom";

function Register() {
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    
    const RegisterUser = async() => {
      await  axios.post(`${URL}/register`, { name, email, mobile, password }).then((res) => {
            setName('');
            setEmail('');
            setMobile('');
            setPassword('');
            navigate("/login")
            console.log(res.data)
        })
    }
    
    return (  
        <div className="container">
            <div className="main">

            <h1>Register</h1>
            <div className="inputbar">

                <input type="text" name="userName" placeholder="Enter Full Name" onChange={(e)=>setName(e.target.value)}/>
                <input type="email" name="email" placeholder="Enter Email Id"  onChange={(e)=>setEmail(e.target.value)}/>
                <input type="number" name="number" placeholder="Enter Mobile Number"  onChange={(e)=>setMobile(e.target.value)}/>
                <input type="password" name="password" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} />
                    <button className="btn" onClick={RegisterUser}>Register</button>
                    <p>If you have already account : <Link className="login" to={"/login"} >Login</Link></p>
            </div>
            </div>
        </div>
    );
}

export default Register;