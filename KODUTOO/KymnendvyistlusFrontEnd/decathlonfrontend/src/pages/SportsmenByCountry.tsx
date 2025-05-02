//import React from 'react'
import { useEffect, useState } from 'react'
import { Person } from '../models/Person'
import { useParams } from 'react-router-dom';

function SportsmenByCountry() {
  
  const[hoomans, setHoomans] = useState<Person[]>([]);
  const {country} = useParams();
  const filteredHoomans = hoomans.filter((entry) => 
    entry.country === country
  );

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
        <div>/ Attendee readout by country {country} /</div>
        <div>
          {filteredHoomans.map(Person =>
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
    )
}

export default SportsmenByCountry