/*
import React,{useState} from 'react'
import WordData from './WordData'
import './Sacdel.css'
const Sacdel = () => {
   const [WordCheck,setWordCheck]=useState('')
 const [randomQuestion,setRandomQuestion]=useState(Math.floor(Math.random() * WordData.length))
const [Score,setScore]=useState(0)
const [CheckAnswerClass,setCheckAnswerClass]=useState()
const [QuestionNumber,setQuestionNumber]=useState(0)
 console.log(Score)
//const RandomSymbol= Math.floor(Math.random() * symbol.length)
 // console.log(RandomSymbol)
const filter= WordData.find(item=> item.id===randomQuestion)


  const Check=() =>{
    if(WordCheck==filter.geo){
      setCheckAnswerClass('sacdeladswori')
    }else {
      setCheckAnswerClass('sacdeladaraswori')
    }
  }

  const NextQuestion= () =>{
    if(WordCheck== ''){
      
    }else{
      setQuestionNumber(QuestionNumber+1)
      setRandomQuestion(randomQuestion+1)
    setWordCheck('')
    setCheckAnswerClass()
    }
    if(WordCheck==filter.geo){
      setScore(Score+1)
    }

  }

  const Help=() =>{
   console.log(filter.geo)
   setWordCheck(filter.geo.slice(0,4))
  }
return (
    <div>
        <h1>Add New Member</h1>
   
<section>
    <br></br>
    {WordData[randomQuestion].gur}
    <input type='text' onChange={(e)=> setWordCheck(e.target.value)} value={WordCheck}  required="required" className={CheckAnswerClass}/>
    <button onClick={()=>Check()}>შეამოწმე</button>
    <button onClick={()=>Help()}>დახმარება</button>
    <br/>
    <br/>
    <input type="submit" className='button-59' onClick={()=> NextQuestion()} value="შემდეგი" />
    
</section>

<h2>{QuestionNumber} დან {Score}</h2>


{QuestionNumber <= 10 ? <h1>ara</h1> : null}
    </div>
  )
}

export default Sacdel
*/


import React,{useState} from 'react'

/////////////////////////////////////////

const Sacdel = () => {
  const [slice1,setSlice1]= useState(0);
  const [slice2,setSlice2]=useState(30);
  const [Text,setText]=useState('')
  const [CheckAnswerClass,setCheckAnswerClass]=useState()
  const text =  `Founded in 1899 by a group of Swiss, Catalan, German, and English footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto "Més que un club" ("More than a club"). Unlike many other football clubs, the supporters own and operate Barcelona. It is the fourth-most valuable sports team in the world, worth $4.76 billion, and the world's fourth richest football club in terms of revenue, with an annual turnover of €582.1 million.[2][3] The official Barcelona anthem is the "Cant del Barça", written by Jaume Picas and Josep Maria Espinàs.[4] Barcelona traditionally play in dark shades of blue and garnet stripes, hence nicknamed Blaugrana.` 
 const aaaj = 'yghu data data data data'
 // console.log(aaaj.search('data'))
  const displaytext=text.slice(slice1,slice2)
 
 // const reversedStr = text.split('').reverse().join('')

 // console.log(reversedStr.split('').reverse())
// console.log(reversedStr)

  const handleChange = (e) => {
    e.preventDefault();
  };


  function findDiff(str1, str2){ 
    let diff= "";
    str2.split('').forEach((val, index)=>{
      if (val != str1.charAt(index)){
        diff += val ;  
      }    
    });
   
    return diff;
  }
 const aaaaj= findDiff(displaytext, Text)
console.log(aaaaj)


 const filters =  [displaytext].find(item=> item===Text)

const difference = displaytext.includes(Text)
//console.log(difference)
  const Change =(e) => {
    setText(e.target.value)
    
    if(filters){
      console.log('sworia dzma yvelaferi gilocav')
      setSlice1(slice1+30)
      setSlice2(slice2+30)
      setText('')
    } else {
      
    }
 

  }

  return (
    <div>
     
      <h1>sacdel</h1>
      <input 
      value={Text}
      onChange={(e)=>Change(e)}
      onCopy={handleChange}
      onPaste={handleChange}
      />
      {displaytext}
      
    </div>
  )
}

export default Sacdel


