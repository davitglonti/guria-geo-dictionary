import Navbars from './Components/Navbars';
import GurianFoods from './Components/GuriaFood/GurianFoods';
import Head from './Components/Head';
import Places from './Components/place/places';
import Placesdetal from './Components/place/Placesdetal';
import Quiz from './Components/Quiz/Quiz';
import AllWord from './Components/AllWord/AllWord';
import Outstanding from './Components/place/Outstanding';
import OutstandingFull from './Components/place/OutstandingFull';
import SignUp from './Components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css"
function App() {

  return (
    <div className="App">
    <Router>
        <Navbars/>
        <Routes>

          <Route path="/" element={<Head/>}/>
          <Route path="/gurianFood" element={<GurianFoods/>}/>
          <Route path="/places" element={<Places/>}/> 
          <Route path="/Placedetal/:id" element={<Placesdetal/>}/>
          <Route path="/Quiz" element={<Quiz/>}/>
          <Route path="/AllWord" element={<AllWord/>}/>
          <Route path="/Outstanding" element={<Outstanding/>}/>
          <Route path="/Outstanding/:id" element={<OutstandingFull/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
   {/* <Footer/> */}
    </Router>




    </div>
  );
}

export default App;
