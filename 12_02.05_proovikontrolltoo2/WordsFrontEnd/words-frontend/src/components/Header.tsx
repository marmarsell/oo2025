import "../rules/header.css"
import "../rules/list.css"
import { Link } from "react-router-dom"

function Header() {

    return(
        <div>
            <div id="mainWidth">
                <hr />
                <div id="entry">
                    <h2>Proovikontrolltöö</h2>

                    <Link to={"/words"}>
                        <h3><button>[ words ]</button></h3>
                    </Link>

                    <Link to={"/add"}>
                        <h3><button>[ + new ]</button></h3>
                    </Link>

                </div>
                <hr />
            </div>
            <br />
        </div>
    )
}

export default Header