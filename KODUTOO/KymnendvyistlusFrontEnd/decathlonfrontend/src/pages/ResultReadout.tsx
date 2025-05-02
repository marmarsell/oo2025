//import React from 'react'
import { useEffect, useState } from 'react'
import { Result } from "../models/Result"
import "../rules/list.css"
import { Link } from 'react-router-dom';

function ResultReadout() {
  
  const[hoomans, setHoomans] = useState<Result[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/results")
        .then(res => res.json())
        .then(json => setHoomans(json))
  }, []);
    
  return (
    <div>
      <div>/ Result readout /</div>
      <div>
        {hoomans.map(Result => 
          <div key={Result.id} id='alignLeft'>
            <hr />
            <div>{"> result identifier:"} {Result.id}</div>
            <div>{"> total points:"} {Result.totalPoints}</div>
            <div>{"> person name:"} {Result.sportsman.name}</div>
            <br />
            <div>
              <Link to={"/results/" + Result.id}>
                <button>Details</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultReadout