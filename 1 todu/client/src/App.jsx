
import { useEffect, useState } from 'react'
import Inputtodu from './componant/Inputtodu'
import Todulist from './componant/Todulist'
import './index.css'
import axios from 'axios'
import { Url } from './utils/contant'
import Popup from './componant/Popup'


function App() {

const [updateUi, setUpdateUi] = useState(false)

  const [toduList, setToduList] = useState([])

  const [todu, setTodu] = useState("")


  const [todudate, setTodudate] = useState('');
  const [popup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  // save todu

  const saveTodu = () => {
    axios.post(`${Url}/save`, { todudate: todudate, todu: todu }).then((res) => {
      setUpdateUi(!updateUi)
      setTodu("");
      setTodudate("");
      console.log(res.data)
    })
  }

// get tudu

  const getData = async () => {
    try {
      const res = await axios.get(`${Url}/get`);
      setToduList(res.data.data)
      console.log(res.data.data);
      
      
    } catch (error) {
      console.log(error)
    }
  
}
  useEffect(() => {
getData()
   
  }, [updateUi])
  
  // delete todu
  
  const deleteTodu = async (id) => { 
    const res = await axios.delete(`${Url}delete/${id}`);
    console.log(`${Url}delete/${id}`)
    setUpdateUi(!updateUi)
  }




  return (
    <div className='main'>
      <Inputtodu todudate={todudate} setTodudate={setTodudate} todu={todu} setTodu={setTodu} saveTodu={saveTodu} />
      <h1>Todo List</h1>
      
      <div className="container">

      {
        toduList.map((toduList, index) => {
          return <Todulist key={index}
            toduList={toduList}
            deleteTodu={deleteTodu}
            setPopup={setPopup}
            popup={popup}
          setPopupContent={setPopupContent}  className='over'/>
        })
      }
      </div>

      {popup ? <Popup setPopup={setPopup} popupContent={popupContent} setUpdateUi={setUpdateUi} updateUi={ updateUi} /> : null}
      
      
    </div>
  )
}

export default App
