import React,{useState} from 'react'
import WordData from './WordData'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
  const [GeoWord,setGeoWord]=useState('')
  const [GurWord,setGurWord]=useState('')
  
    const [FullWord,setFUllWord]=useState(WordData)

  const HandleClick=()=>{
    console.log('aaaj')
    setFUllWord([...FullWord,{id:FullWord.length,geo:GeoWord, gur:GurWord}])
  }
  console.log(FullWord)
  return (
    <div style={{width:'300px'}}>
     <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Geo</Form.Label>
        <Form.Control type="text" placeholder="Enter geo"  onChange={(e)=>setGeoWord(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>gur</Form.Label>
        <Form.Control type="text" placeholder="Enter gur" onChange={(e)=>setGurWord(e.target.value)}/>
        <Form.Text >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button  className='button-59' onClick={()=>HandleClick()}>
        Submit
      </Button>

    </Form>
    </div>
  )
}

export default SignUp