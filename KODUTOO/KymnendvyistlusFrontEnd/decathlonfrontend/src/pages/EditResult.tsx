import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { Result } from "../models/Result";

function EditResult() {

    const [results, setResults] = useState<Result[]>([]);
    const {resultId} = useParams();

    const navigate = useNavigate();

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

    const filteredResults = results.find((entry) => 
        entry.id == Number(resultId)
    );

    useEffect(() => {
        fetch("http://localhost:8080/results")
            .then(res => res.json())
            .then(json => setResults(json))
    }, []);

    const editResult = (id: number) => {
        fetch(`http://localhost:8080/results/${id}`, {
            method: "DELETE",
        })
        .then(() => alert("The result with id " + id + " was deleted successfully"))
        .then(addResult)
    }
    
    const addResult = () => {
   
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

            sportsman: {"id": Number(filteredResults?.sportsman.id)}
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
                    alert("success! replaced result for" + filteredResults?.sportsman.name)
                } 
                else {
                    alert(json.message);
                }
            })
            navigate("/manage/rmresult")
        ;
   
    }

    return(
        <div>
            <div>/ Change {filteredResults?.sportsman.name}'s result /</div>
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
            <br />
            <div>! Result ID is prone to change after this !</div>
            <br />
            <button onClick={() => editResult(Number(resultId))}>Edit</button>
        </div>
    )
}

export default EditResult