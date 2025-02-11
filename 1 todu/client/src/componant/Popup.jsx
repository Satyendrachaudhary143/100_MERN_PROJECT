import axios from "axios";
import { ImCross } from "react-icons/im";
import { Url } from "../utils/contant";
import { useState } from "react";

function Popup({ setPopup,popupContent ,setUpdateUi,updateUi}) {
    const [todudate, setTodudate] = useState(popupContent.todudate);
    const [todu, setTodu] =useState(popupContent.todu);

    const updateToduDataBase = async() => {
        const res = await axios.put(`${Url}update/${popupContent._id}`, { todudate, todu });
        console.log(res.data);
        setUpdateUi(!updateUi);
        setPopup(false);
    }

  return (
      <div className="popup-box">
          <div className="box">
          <ImCross className="cros pointer" onClick={()=>setPopup(false)}  />
        <div className="inputA inpc">
              
              <input type="date"  className="date" name="todudate" value={todudate} onChange={(e)=>setTodudate(e.target.value)}/>
                <input type="text" name="todu" className="inp" value={todu} onChange={(e)=>setTodu(e.target.value)}/>
                <button className="btn" onClick={()=>updateToduDataBase()} >Update</button>
                  </div>
    </div>
          </div>
  );
}

export default Popup;