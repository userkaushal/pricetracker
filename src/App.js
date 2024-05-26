import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Trending from './components/Trending';
import Steps from './components/Steps';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Result from './components/results/Result';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/result" element={<Result />} />   
      </Routes>
    
    </div>
  );
}

export default App;
