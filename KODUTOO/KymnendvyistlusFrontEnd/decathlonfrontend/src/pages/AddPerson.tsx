import { useRef } from "react";

function AddPerson() {

    const nameRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const postPerson = () => {

        const newHuman = {
            name: nameRef.current?.value,
            country: countryRef.current?.value,
            age: ageRef.current?.value
        }

        fetch(`http://localhost:8080/humans`, {
                method: "POST",
                body: JSON.stringify(newHuman),
                headers: {
                  "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(json=> {
                if(
                    json.message === undefined && 
                    json.timestamp === undefined && 
                    json.status === undefined
                ) {
                    alert("success! Added new attendee with name " + newHuman.name + 
                        " from " + newHuman.country + 
                        " and the age of " + newHuman.age
                    )
                } 
                else {
                    alert(json.message);
                }
          
            })
            .then(reloadPage)
        ;

    }

    const reloadPage = () => {
        window.location.reload();
    }    

    return(
        <div>
            <div>/ Add attendee /</div>
            <hr />
            <div>
                <input ref={nameRef} type="text" placeholder={"name"} />
                <input ref={countryRef} type="text" placeholder={"country"} />
                <input ref={ageRef} type="number" placeholder={"age"} />
            </div>
            <hr />
            <button onClick={() => postPerson()}>submit</button>
        </div>
    )
}

export default AddPerson