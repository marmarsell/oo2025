import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import type { Word } from "../models/Word";
import "../rules/list.css"

function ViewEdit() {

    const {wordID} = useParams();
    const [allWords, setAllWords] = useState<Word[]>([])
    const filteredResult = allWords.find((entry) =>
        entry.id == Number(wordID)
    );
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/words")
            .then(res => res.json())
            .then(json => setAllWords(json))
    }, []);

    const deleteWord = (id: number) => {
        fetch(`http://localhost:8080/words/${id}`, {
          method: "DELETE",
        }).then(() => alert("The entry with id " + id + " was deleted successfully"))
        navigate("/words");
    };

    return(
        <div>
            <div>/ Word Details /</div>
            <br />
            <hr />
            <div id="alignLeft">
                <div>Word: {filteredResult?.type}</div>
                <div>Id: {filteredResult?.id}</div>
                <div>Desc: {filteredResult?.description}</div>
            </div>
            <hr />
            <br />
            <div>/ Actions /</div>
            <div id="entry">
                |
                <div>
                    <Link to={"/edit/" + filteredResult?.id}>
                        <button>edit</button>
                    </Link>
                </div>
                <div>
                    <button onClick={() => {deleteWord(Number(filteredResult?.id))}}>yoink</button>
                </div>
                |
            </div>
        </div>
    )
}

export default ViewEdit