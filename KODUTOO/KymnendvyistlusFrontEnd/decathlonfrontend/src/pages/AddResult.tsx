import { useRef, useState, useEffect } from "react";
import { Person } from "../models/Person";
import { Result } from "../models/Result";

function AddResult() {

    const [hoomans, setHoomans] = useState<Person[]>([]);
    const [results, setResults] = useState<Result[]>([]);

    const run100Ref = useRef<HTMLInputElement>(null);
    const run110Ref = useRef<HTMLInputElement>(null);
    const run400Ref = useRef<HTMLInputElement>(null);
    const run1500Ref = useRef<HTMLInputElement>(null);

    const highJumpRef = useRef<HTMLInputElement>(null);
    const longJumpRef = useRef<HTMLInputElement>(null);
    const poleVaultRef = useRef<HTMLInputElement>(null);

    const discusRef = useRef<HTMLInputElement>(null);
    const javelinRef = useRef<HTMLInputElement>(null);
    const shotPutRef = useRef<HTMLInputElement>(null);

    const sportsmanRef = useRef<HTMLSelectElement>(null);

    const humansWithResult: number[] = [];
    const resultlessId: number[] = [];

    useEffect(() => {
        fetch("http://localhost:8080/humans")
            .then(res => res.json())
            .then(json => setHoomans(json))
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/results")
            .then(res => res.json())
            .then(json => setResults(json))
    }, []);

    results.forEach(function (entry) {
        humansWithResult.push(entry.sportsman.id);
    });

    hoomans.forEach(function (human) {
        if(!humansWithResult.includes(human.id)) {
            resultlessId.push(human.id);
        }
    })

    const resultlessPeeps = hoomans.filter((person) => 
        resultlessId.includes(person.id)
    );
   
    const postResult = () => {
   
        const newResult = {

            totalPoints: 0,
            run100m: run100Ref.current?.value,
            run110mHurdles: run110Ref.current?.value,
            run400m: run400Ref.current?.value,
            run1500m: run1500Ref.current?.value,

            discusThrow: discusRef.current?.value,
            javelinThrow: javelinRef.current?.value,
            shotPut: shotPutRef.current?.value,

            highJump: highJumpRef.current?.value,
            longJump: longJumpRef.current?.value,
            poleVault: poleVaultRef.current?.value,

            sportsman: {"id": Number(sportsmanRef.current?.value)}
        }
   
        fetch(`http://localhost:8080/results`, {
                method: "POST",
                body: JSON.stringify(newResult),
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
                    alert("success! Added new result for " + sportsmanRef.current?.value)
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
            <div>/ Add result /</div>
            <hr />
            <div>
                Runs
            </div>
            <div>
                <input ref={run100Ref} type="number" placeholder={"(best 10.395s) run 100m"} />
                <input ref={run110Ref} type="number" placeholder={"(best 13.80s) run hurdles"} />
                <input ref={run400Ref} type="number" placeholder={"(best 46.17s) run 400m"} />
                <input ref={run1500Ref} type="number" placeholder={"(best 233.79s) run 1500m"} />
            </div>
            <hr />
            <div>
                Jumps
            </div>
            <div>
                <input ref={highJumpRef} type="number" placeholder={"(best 220cm) high jump"} />
                <input ref={longJumpRef} type="number" placeholder={"(best 776cm) long jump"} />
                <input ref={poleVaultRef} type="number" placeholder={"(best 528) pole vault"} />
            </div>
            <hr />
            <div>
                Throws
            </div>
            <div>
                <input ref={discusRef} type="number" placeholder={"(best 56.17m) discus"} />
                <input ref={javelinRef} type="number" placeholder={"(best 77.19m) javelin"} />
                <input ref={shotPutRef} type="number" placeholder={"(best 18.40m) shotPut"} />
            </div>
            <hr />
            <div>
                <div>
                    Person
                </div>
                <select ref={sportsmanRef}>
                    {resultlessPeeps.map(person =>
                        <option value={person.id} key={person.id}>
                            name: {person.name} id: {person.id}
                        </option>
                    )}
                </select>
            </div>
            <hr />
            <button onClick={() => postResult()}>submit</button>
        </div>
    )
}

export default AddResult