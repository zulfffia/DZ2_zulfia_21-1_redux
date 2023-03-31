import {Link} from "react-router-dom";
import React from "react";


export function NavBar(){
    return(
        <ul className="navBar">
            <li>
                <Link to="/name">Name Page</Link>
            </li>
            <li>
                <Link to="/photo">Photo Page</Link>
            </li>
        </ul>
    )
}
