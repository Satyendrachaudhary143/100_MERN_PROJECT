import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


function Todulist({ toduList ,deleteTodu ,setPopupContent,setPopup}) {
    const { todudate, todu, _id } = toduList;
    
    
    const updateToDo = () => { 
        setPopupContent({todudate, todu, _id});
        setPopup(true);
    }
    return (
        
         
           <div className="list" >
                <p>{todudate}</p>
                <p>{todu}</p>
                <div className="icon">
                <FaTrash onClick={() => { deleteTodu(_id); console.log(_id) }
                } className="del"/>
                <FaEdit onClick={() => { updateToDo(); setPopup(true)}}  className="pointer"/>
                </div>
              
                
            </div>
       
            
        
    )
}
export default Todulist;