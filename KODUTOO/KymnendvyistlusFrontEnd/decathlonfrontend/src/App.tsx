//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main.tsx";
import Array from './pages/Array.tsx';
import AllSportsmen from './pages/AllSportsmen.tsx';
import ResultReadout from './pages/ResultReadout.tsx';

function App() {

  return (
    <>
      <div>wawa</div>
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/sportsmen" element={ <AllSportsmen />} />
        <Route path="/results" element={ <ResultReadout />} />
        <Route path="/array" element={ <Array />} />
      </Routes>
    </>
  )
}

export default App
