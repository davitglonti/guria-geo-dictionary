
import React,{useState} from 'react'

const Favorites = () => {
  const aray = [
    {name:'dav', lastName:'baaaj'},
    {name:'ban',lastName:'kl'},
    {name:'gan',lastName:"kjl"},
    {name:'baaaj',lastName:"bjkllanqoo"}
]

  const [AddName,setAddName]=useState('')
  const [AddLastName,setAddLastName]=useState('')
  const [AddFull,setAddFull]=useState(
    {
      name:AddName, lastName:AddLastName
    }
   
  )
  const AddLocalStorage = JSON.parse(localStorage.getItem('Add'));
  const [More,setMore]=useState(AddLocalStorage)

  
const Addtext=() =>{
  if(AddName.length  <= 5|| AddLastName <= 5 ){
   alert('sheavse bliad')
   
  }else {
setMore([...More,{ name: AddName, lastName: AddLastName }])
  }
//
}
localStorage.setItem('Add', JSON.stringify(More));
const deleteInfo =(index)=>{
More.splice(index,1)

}
console.log(More)
  return (
    <>
    
    <div>
      <h1>Favorites</h1>
      {More.map((item,index)=>{
        return (
          <div style={{border:'3px solid green', margin:'30px'}}>
          <h2 key={index}> Name: {item.name}</h2>
          <h2 > LastName: {item.lastName}</h2>
          <button onChange={()=>deleteInfo(index)} className="button-59"> Delete</button>
          </div>
        )
      })}
      <input type='text' onChange={(e)=>setAddName(e.target.value)} placeholder='Name'/>
      <input type='text' onChange={(e)=>setAddLastName(e.target.value)} placeholder="LastName"/>
      <button onClick={()=>Addtext()}>Add</button>
    </div>

    

</>
  )
}

export default Favorites
