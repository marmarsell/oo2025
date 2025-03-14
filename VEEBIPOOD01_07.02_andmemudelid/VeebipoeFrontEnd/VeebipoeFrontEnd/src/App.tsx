import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sonad = ["Elas", "Metsas", "Mutionu"];
  const autod = [
    {"mark": "BMW", "mudel": "i5", "year": 2015},
    {"mark": "Volkswagen", "mudel": "golf", "year": 2017},
    {"mark": "Audi", "mudel": "TT", "year": 2015},
    {"mark": "Mercedes", "mudel": "S", "year": 2012}
  ];

  return (
    <>
      {/* <div>{7 + 7}</div>
      <div>7 + 7</div>
      <div>{kogus}</div>
      <div>{count}</div> */}
      {/* {sonad.map(sona => <div key = {sona}>{"> " + sona}</div> )} */}
      {autod.map(auto => <div key = {auto.mark+auto.mudel}>{"> " + auto.mark}</div> )}
    </>
  )
}

/* key={}
React soovib koodi mällu jätta */

export default App
