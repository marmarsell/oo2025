//import React from 'react'
import { useEffect, useState } from 'react'
import { Person } from '../models/Person'

function AllSportsmen() {
  
  const[hoomans, setHoomans] = useState<Person[]>([]);

  /*useEffect(() => {
    fetch("http://localhost:8080/humans")
        .then(res => res.json())
        .then(json => setHoomans(json))
  }, []);*/

  useEffect(() => {
    fetch("http://localhost:8080/humans")
        .then(res => res.json())
        .then(json => setHoomans(json))
  }, []);
    
  /*return (
    <div>
      <div>/ Attendee readout /</div>
      <div>
        {hoomans.map(Person =>
          <div key={Person.id} id='alignLeft'>
            <hr />
            <div>{"> person identifier:"} {Person.id}</div>
            <div>{"> first name:"} {Person.name}</div>
            <div>{"> years spent on this goforsaken planet:"} {Person.age}</div>
            <div>{"> spawn location:"} {Person.country}</div>
          </div>
        )}
      </div>
    </div>
  )*/

    return (
      <div>
        <div>/ Attendee readout full /</div>
        <div>
          {hoomans.map(Person =>
            <div key={Person.id} id='alignLeft'>
              <hr />
              <div>{"> first name:"} {Person.name}</div>
              <div>{"> years spent on this goforsaken planet:"} {Person.age}</div>
              <div>{"> spawn location:"} {Person.country}</div>
            </div>
          )}
        </div>
      </div>
    )
}

export default AllSportsmen