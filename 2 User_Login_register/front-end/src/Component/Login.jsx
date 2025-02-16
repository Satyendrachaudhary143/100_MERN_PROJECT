import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../utils/Content";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        console.log("he")
        await axios.post(`${URL}/login`, { email, password }).then((res) => {
           
            navigate("/home");
            console.log(res.data);
        })
    }

    return (  <div className="container">
        <div className="main">

        <h1>Login</h1>
        <div className="inputbar">

            
            <input type="email" name="email" placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)}/>
            
            <input type="password" name="password" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn" onClick={login}>Login</button>
              
                <div className="navi">
                <p>If you have't account :<Link to={"/resgister"}>Register</Link> </p>
                {/* <p>Forgot Password :<Link to={"/forgot"}>Forgot</Link> </p> */}

                </div>
        </div>
        </div>
    </div> );
}

export default Login;