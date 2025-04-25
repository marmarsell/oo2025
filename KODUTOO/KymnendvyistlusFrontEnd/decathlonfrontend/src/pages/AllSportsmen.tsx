//import React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Person } from '../models/Person'

function AllSportsmen() {
  
  const[hoomans, setHoomans] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/humans")
        .then(res => res.json())
        .then(json => setHoomans(json))
  }, []);
    
  return (
    <div>
      <div>
        {hoomans.map(Person => 
          <div key={Person.id}>
            {"id:"} {Person.id} {Person.name} {Person.age} {Person.country}
          </div>
        )}
      </div>
    </div>
  )
}

export default AllSportsmen