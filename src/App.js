import './App.css';
import Home from './pages/Home';
import Results from './pages/Results';
import Categories from './pages/Categories';
import Judges from './pages/Judges';
import EarnedTheirWings from './pages/EarnedTheirWings';
import Navigation from './components/Navigation';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/judges" element={<Judges/>}/>
        <Route path="/earned-their-wings" element={<EarnedTheirWings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
