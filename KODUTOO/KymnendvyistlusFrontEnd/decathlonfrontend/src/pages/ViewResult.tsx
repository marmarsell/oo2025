import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Result } from "../models/Result";

function ViewResult() {

    const [results, setResults] = useState<Result[]>([]);
    const {resultId} = useParams();
    const filteredResults = results.find((entry) => 
        entry.id == Number(resultId)
    );

    useEffect(() => {
        fetch("http://localhost:8080/results")
            .then(res => res.json())
            .then(json => setResults(json))
    }, []);

    return(
        <div>
            <div> / result {resultId} / </div>
            <hr />
            <div id="entry">
                <div> | </div>
                <div> Associated Person: </div>
                <div> | </div>
            </div>
            <br />
            <div id="entry">
                <div> {filteredResults?.sportsman.name} ({filteredResults?.sportsman.age} years) </div>
                <div> Origin: {filteredResults?.sportsman.country} </div>
            </div>
            <div id="alignLeft"> personal id: {filteredResults?.sportsman.id} </div>
            <hr />
            <div id="entry">
                <div> | </div>
                <div> Full result </div>
                <div> | </div>
            </div>
            <br />
            <div id="alignLeft">
                <div id="entry">
                    <div> TotalPoints </div>
                    <div> {filteredResults?.totalPoints} </div>
                </div>
                <div id="entry">
                    <div>Result id:</div>
                    <div> {filteredResults?.id} </div>
                </div>
                <br />
                <div id="entry">
                    <div> sprint 100 meters </div>
                    <div> {filteredResults?.run100m} points </div>
                </div>
                <div id="entry">
                    <div> run 400 meters </div>
                    <div> {filteredResults?.run400m} points </div>
                </div>
                <div id="entry">
                    <div> run 1500 meters </div>
                    <div> {filteredResults?.run1500m} points </div>
                </div>
                <div id="entry">
                    <div> hurdles 110 meters </div>
                    <div> {filteredResults?.run110mHurdles} points </div>
                </div>
                <div id="entry">
                    <div> long jump </div>
                    <div> {filteredResults?.longJump} points </div>
                </div>
                <div id="entry">
                    <div> high jump </div>
                    <div> {filteredResults?.highJump} points </div>
                </div>
                <div id="entry">
                    <div> pole vault </div>
                    <div> {filteredResults?.poleVault} points </div>
                </div>
                <div id="entry">
                    <div> discus throw </div>
                    <div> {filteredResults?.discusThrow} points </div>
                </div>
                <div id="entry">
                    <div> javelin throw </div>
                    <div> {filteredResults?.javelinThrow} points </div>
                </div>
                <div id="entry">
                    <div> shot put </div>
                    <div> {filteredResults?.shotPut} points </div>
                </div>
            </div>
        </div>

        
    )
}

export default ViewResult