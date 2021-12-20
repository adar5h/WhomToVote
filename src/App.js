
import './App.css';
import LoginPage from './Pages/LoginPage';
import {Routes , Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CandidatesListPage from './Pages/CandidatesListPage';
import CandidateInfoPage from './Pages/CandidateInfoPage';
import NavBar from './Components/NavbarComponent';
const DefaultLayout = ({Component},props) =>{
  return(
    <div>
      <NavBar />
      <Component {...props}/>
    </div>
  )
}
function App() {

  return (
    <Routes >

      <Route  path="/" exact element={<LoginPage />}/>
      <Route path="/home" element={<DefaultLayout Component={HomePage}/>} />
      <Route path="/CandidateList/:electiontype/:state/:constituency" element={<DefaultLayout Component={CandidatesListPage}/>} />
      <Route path="/Candidate/:name" element={<DefaultLayout Component={CandidateInfoPage}/>} />
    </Routes>
    );
}

export default App;
