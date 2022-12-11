import React, {useState} from 'react'
import ProgressBar from './ProgressBar'
const Sacdel2 = () => {
    const [val,setVal]=useState(10)
    const setValuer=(e)=> setVal(e.target.value)

    
    setTimeout(() => {
       setVal(val+1)
      }, "1000")

  return (
    <div>
        <ProgressBar width={val}/>
    <br/>
    <br/>
        <form>
          <label >Input Percentage:</label>
          <input type="number" onChange={setValuer} />
        </form>
        
    </div>
  )
}

export default Sacdel2