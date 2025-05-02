import { useState, useEffect } from "react";
import { Result } from "../models/Result";
import { Link } from "react-router-dom";

function RmResult() {

    const[hoomans, setHoomans] = useState<Result[]>([]);
    
      useEffect(() => {
        fetch("http://localhost:8080/results")
            .then(res => res.json())
            .then(json => setHoomans(json))
      }, []);
    
      const deleteResult = (id: number) => {
        fetch(`http://localhost:8080/results/${id}`, {
          method: "DELETE",
        }).then(() => alert("The result with id " + id + " was deleted successfully"))
        .then(reloadPage)
      };
    
      const reloadPage = () => {
        window.location.reload();
      }
        
        return (
          <div>
            <div>/ Result removal /</div>
            <div>
              {hoomans.map(entry =>
                <div key={entry.id}>
                    <hr />
                        <div id='entry'>
                            <div id='alignLeft'>
                                <div>{"> result identifier:"} {entry.id}</div>
                                <div>{"> result total score: "} {entry.totalPoints}</div>
                                <div>{"> Attendee identifier:"} {entry.sportsman.id}</div>
                                <div>{"> Attendee Name:"} {entry.sportsman.name}</div>
                            </div>
                            <div>
                                <div><button onClick={() => {deleteResult(entry.id)}}>X</button></div>
                                <div><Link to={"/manage/editResult/" + entry.id}><button>✎</button></Link></div>
                            </div>
                            
                        </div>   
                </div>
              )}
            </div>
          </div>
        )
}

export default RmResult