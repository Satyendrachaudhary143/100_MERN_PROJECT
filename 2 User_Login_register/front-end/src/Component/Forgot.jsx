import { useState } from "react";
import { Link } from "react-router-dom";

function Forgot() {
    const [otp, setOtp] = useState(true)
    const [changepassword, setChangePassword] = useState(false)
    return ( 
      (otp ?  <div className="container">
        <div className="main">

        <h1>Forgot Password</h1>
        <div className="inputbar">

     
            <input type="email" name="email" placeholder="Enter Email Id" />
       
                <button className="btn" onClick={()=>setOtp(false)}>Next</button>
                <Link className="login" to={"/login"} >GoBack</Link>
        </div>
        </div>
    </div> :  <div className="container">
        <div className="main">

        
        <div className="inputbar">

     
            <input type="number" name="number" placeholder="Enter Otp" />
       
                <button className="btn" onClick={()=>setChangePassword(true)}>Next</button>
                
        </div>
        </div>
        </div> )
        // ,
        (changepassword ? <div className="container">
        <input type="password" name="password" placeholder="Enter New Password" />
                <input type="password" name="password" placeholder="Confirm Password" />
                    <button className="btn">Submit</button>
                    <Link className="login" to={"/login"} >GoBack</Link>
                </div> :null)
     );
}

export default Forgot;