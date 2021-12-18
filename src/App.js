
import './App.css';
import DefaultHOC from './HOC/DefaultHOC';
import HomePage from './Pages/HomePage';

function App() {
  return (
    // <DefaultHOC path='/' component={HomePage} />
    <HomePage class="w-full h-full"/>
    );
}

export default App;
