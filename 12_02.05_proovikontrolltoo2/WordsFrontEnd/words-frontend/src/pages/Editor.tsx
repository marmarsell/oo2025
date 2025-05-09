import { useRef, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import "../rules/list.css"
import type { Word } from "../models/Word";

function Editor() {

    const typeRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const {wordID} = useParams();
    const [allWords, setAllWords] = useState<Word[]>([])
    const filteredResult = allWords.find((entry) =>
        entry.id == Number(wordID)
    );

    useEffect(() => {
        fetch("http://localhost:8080/words")
            .then(res => res.json())
            .then(json => setAllWords(json))
    }, []);

    const deleteWord = (id: number) => {
        fetch(`http://localhost:8080/words/${id}`, {
          method: "DELETE",
        }).then(() => alert("The entry with id " + id + " was deleted successfully"))
        .then(() => postWord());
    };
    
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
                        -<input ref={typeRef} type="text" placeholder="new word" defaultValue={filteredResult?.type}/>-
                    </div>
                </div>
                <div id="entry">
                    <div>Desc:</div>
                    <div>
                        -<input ref={descRef} type="text" placeholder="description" defaultValue={filteredResult?.description}/>-
                    </div>
                </div>
            </div>
            <hr />
            <button onClick={() => deleteWord(Number(filteredResult?.id))}>send it!</button>
        </div>
    )
}

export default Editor