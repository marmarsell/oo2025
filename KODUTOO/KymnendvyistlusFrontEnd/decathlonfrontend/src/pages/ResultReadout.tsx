//import React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Result } from "../models/Result"

function ResultReadout() {
  
  const[hoomans, setHoomans] = useState<Result[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/results")
        .then(res => res.json())
        .then(json => setHoomans(json))
  }, []);
    
  return (
    <div>
      <div>
        {hoomans.map(Result => 
          <div key={Result.id}>
            {"id:"} {Result.id} {Result.totalPoints} {Result.sportsman.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultReadout