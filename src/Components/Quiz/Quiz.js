import React, {useState} from 'react'
import './Quiz.css'
import QuizData from './QuizData'
const Quiz = () => {
const [Question, setQuestion]=useState(0)
const [score,setScore]=useState(0)
const [check, setCheck]=useState(true)



//random Questions
const Questions= QuizData.sort(() => Math.random() - Math.random()).slice(0, 5)
//console.log(Questions )


//const Questions = QuizData(Math.floor(mat)).slice(0,3)
//console.log(Questions)
  const AnswerCheck = (item, answer) =>{
  
   setTimeout(() => setQuestion(Question+1), 300);
    //score checker
    if(item== true){
     setScore(score+1)
    }

    //quiz length check
    if(Question===Questions.length-1){
  setCheck(false)
 
  }
  }

  const Playagain= () => {
    setCheck(true)
    setQuestion(0)
    setScore(0)
   
  }


  return (
    <div>
      { check ?
        <section className="section-1" id="section-1">
          <main>
            <div className="text-container">
              <h3>Pure CSS Quiz</h3>
              <p>QUESTION {Question+1} OF {Questions.length}</p>
              {Questions[Question].image ? <img src={Questions[Question].image} className="QuizImage"/>  :null}
              <p>{Questions[Question].Question}</p>
              
            </div>
              <div className="quiz-options">
                {Questions[Question].Answers.map((item,index)=>{
                  return (
                    <>
                     <button className='button-59'  key={index} style={{marginLeft:'35px' }} onClick={()=>AnswerCheck(item.Correct)} > {item.answer}</button>
                 
                </>
                  )
                })}  
              </div>
             
        
          </main>
        </section>
        :
        <>
        <section id="game-over">
          <div className="game-over-content">
            <div className='gameover-info'>
              <h1>Game Over</h1>
              <h2 className={score > Questions.length / 2 ? "Goodresult": "Badresult"}>Total Score: {score}</h2>
              <button className='button-59'  onClick={()=>Playagain()}>Play Again</button>
    
            </div>
          </div>
         

          
        </section>

      
             </>
      }
        <div className="score-counter">
          <p className="score-text">CORRECT: {score}/ {Questions.length}</p>
        </div>
       
      </div>
  )
}

export default Quiz