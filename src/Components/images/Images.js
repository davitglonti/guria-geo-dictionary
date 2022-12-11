import React, {useState} from 'react'
import "./images.css"
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';


const Images = ({images}) => {
const [Check,setCheck]=useState(false)
const [CheckImg,setCheckImg]=useState(0)

console.log(CheckImg)

    const array = ['https://images.pexels.com/photos/13192126/pexels-photo-13192126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2869510/pexels-photo-2869510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', "https://images.pexels.com/photos/1034660/pexels-photo-1034660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
    const length = array.length
    const ClickImg=(index)=> {
        setCheck(!Check)
        setCheckImg(index)
    }
  

    const Prev=()=>{
        console.log('Prev') 
        setCheckImg( CheckImg === 0? length-1:CheckImg-1)
      
    }

    const Next=()=>{
       console.log('Next') 
       setCheckImg(length===CheckImg ?0:  CheckImg+1)
    }
    return (
    <div>
        {Check? 
       
        <div className='imgContainer'>
            <img src={array[CheckImg]} className="Fullimage" onClick={()=>setCheck(false)} />
            <AiFillCaretLeft style={{fontSize:'70px'}} className='iconLeft' onClick={()=>Prev()}/>
            <AiFillCaretRight style={{fontSize:'70px'}} className='iconRight' onClick={()=>Next()}/>
        </div>
        :null
        }


 
        {array.map((item,index)=>{
            return  (
                <>
                <img className='headimages' src={item} key={index} onClick={()=> ClickImg(index)}/>
      
          </>
                )
        })}

      
    </div>
  )
}

export default Images