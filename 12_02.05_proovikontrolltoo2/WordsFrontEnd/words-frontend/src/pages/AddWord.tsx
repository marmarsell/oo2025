import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "../rules/list.css"

function AddWord() {

    const typeRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const postWord = () => {
        
        const newWord = {
            type: typeRef.current?.value,
            description: descRef.current?.value
        }

        fetch(`http://localhost:8080/words`, {
            method: "POST",
            body: JSON.stringify(newWord),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(json => {
                if(
                    json.message === undefined && 
                    json.timestamp === undefined && 
                    json.status === undefined
                ) {
                    alert(
                        "added word " + newWord.type + "!"
                    );
                } else {
                    alert(json.message);
                }
            })
            navigate("/words");
    }

    return(
        <div>
            <div>/ Add New Word /</div>
            <br />
            <hr />
            <div id="alignLeft">
                <div id="entry">
                    <div>Word:</div>
                    <div>
                        -<input ref={typeRef} type="text" placeholder="new word"/>-
                    </div>
                </div>
                <div id="entry">
                    <div>Desc:</div>
                    <div>
                        -<input ref={descRef} type="text" placeholder="description"/>-
                    </div>
                </div>
            </div>
            <hr />
            <button onClick={() => postWord()}>send it!</button>
        </div>
    )
}

export default AddWord