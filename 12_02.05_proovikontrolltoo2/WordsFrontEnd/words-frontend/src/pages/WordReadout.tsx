import { useEffect, useState } from "react"
import type { Word } from "../models/Word"
import "../rules/list.css"
import { Link } from "react-router-dom"

function WordReadout() {

    const [allWords, setAllWords] = useState<Word[]>([])

    useEffect(() => {
        fetch("http://localhost:8080/words")
            .then(res => res.json())
            .then(json => setAllWords(json))
    }, []);
    
    return(
        <div>
            <div>/ Full Word List /</div>
            <br />
            <hr />
            <div id="mainWidth">
                <div>
                    {allWords.map(daWord =>
                        <div key={daWord.id} id="alignLeft">
                            <div id="entry">
                                <div> {">"} {daWord.type}</div>
                                <Link to={"/words/" + daWord.id}>
                                    <button>details ...</button>
                                </Link>
                            </div>
                            <hr />
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default WordReadout