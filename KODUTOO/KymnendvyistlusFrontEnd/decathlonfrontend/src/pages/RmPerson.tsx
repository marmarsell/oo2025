import { useEffect, useState } from 'react'
import { Person } from '../models/Person'
import "../rules/list.css"

function RmPerson() {
  
  const[hoomans, setHoomans] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/humans")
        .then(res => res.json())
        .then(json => setHoomans(json))
  }, []);

  const deleteProduct = (id: number) => {
    fetch(`http://localhost:8080/humans/${id}`, {
      method: "DELETE",
    }).then(() => alert("The entry with id " + id + " was deleted successfully"))
    .then(reloadPage)
  };

  const reloadPage = () => {
    window.location.reload();
  }
    
    return (
      <div>
        <div>/ Attendee removal /</div>
        <div>
          {hoomans.map(Person =>
            <div key={Person.id}>
                <hr />
                    <div id='entry'>
                        <div id='alignLeft'>
                            <div>{"> first name:"} {Person.name}</div>
                            <div>{"> years spent on this goforsaken planet:"} {Person.age}</div>
                            <div>{"> spawn location:"} {Person.country}</div>
                            <div>{"> person identifier:"} {Person.id}</div>
                        </div>
                        <div>
                            <button onClick={() => {deleteProduct(Person.id)}}>X</button>
                        </div>
                        
                    </div>   
            </div>
          )}
        </div>
      </div>
    )
}

export default RmPerson