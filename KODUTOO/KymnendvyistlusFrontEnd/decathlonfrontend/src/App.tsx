//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import { Routes, Route } from "react-router-dom";

import NavHeader from './components/NavHeader.tsx';

import Main from "./pages/Main.tsx";
import Array from './pages/Array.tsx';

import AllSportsmen from './pages/AllSportsmen.tsx';
import SportsmenByCountry from './pages/SportsmenByCountry.tsx';

import ResultReadout from './pages/ResultReadout.tsx';

import AddPerson from './pages/AddPerson.tsx';
import RmPerson from './pages/RmPerson.tsx';
import AddResult from './pages/AddResult.tsx';
import RmResult from './pages/RmResult.tsx';
import ViewResult from './pages/ViewResult.tsx';
import EditResult from './pages/EditResult.tsx';

function App() {

  return (
    <>
      <div><NavHeader /></div>
      <div>current page:</div>
      <div>
        <Routes>
          <Route path="/" element={ <Main />} />
          <Route path="/sportsmen" element={ <AllSportsmen />} />
          <Route path="/sportsmen/:country" element={ <SportsmenByCountry />} />
          <Route path="/results" element={ <ResultReadout />} />
          <Route path="/array" element={ <Array />} />

          <Route path="/manage/addperson" element={ <AddPerson />} />
          <Route path="/manage/rmattendee" element={ <RmPerson />} />

          <Route path="/manage/addresult" element={ <AddResult />}></Route>
          <Route path="/manage/rmresult" element={ <RmResult />}></Route>

          <Route path="/results/:resultId" element={ <ViewResult />}></Route>
          <Route path="/manage/editResult/:resultId" element={ <EditResult />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
