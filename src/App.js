
import './App.css';
import LoginPage from './Pages/LoginPage';
import {Routes , Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CandidatesListPage from './Pages/CandidatesListPage';
import CandidateInfoPage from './Pages/CandidateInfoPage';
import NavBar from './Components/NavbarComponent';

const Component1 = (props) =>{
  return(
    <div>
      <NavBar />
      <CandidatesListPage {...props}/>
      <h1>Footer</h1>
    </div>
  )
}
const Component2 = (props) =>{
  return(
    <div>
      <NavBar />
      <CandidateInfoPage {...props}/>
      <h1>Footer</h1>
    </div>
  )
}
function App() {

  return (
    <Routes >

      <Route  path="/" exact element={<LoginPage />}/>
      <Route path="/home" element={<HomePage />} />
      <Route path="/CandidateList/:electiontype/:state/:constituency" element={<Component1 />} />
      <Route path="/Candidate/:name" element={<Component2 />} />
    </Routes>
    );
}

export default App;
