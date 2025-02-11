function Inputtodu({todudate, setTodudate, todu, setTodu ,saveTodu}) {
  const handleDate = (e) => { 
    setTodudate(e.target.value)
  }
  const handleTodu = (e) => {
    setTodu(e.target.value)
  }

  return (
      
          <div className="inputA ">
              
      <input type="date"  className="date" name="todudate" onChange={(e)=>handleDate(e)} value={todudate} required />
        <input type="text" name="todu" className="inp" onChange={(e)=>handleTodu(e) } value={todu} required/>
        <button className="btn" onClick={()=>saveTodu() }>Add</button>
          </div>
    
  );
}
export default Inputtodu;