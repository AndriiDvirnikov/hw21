import React from "react"
import { Link } from "react-router-dom"


 const Navigation = ({links})=> {
    return(
    <nav>
        <ul className="nav">
            {links.map(link=> 
            <li className="link" key={link.to}><Link to={link.to}>{link.label}</Link></li>    
            )}
        </ul>
    </nav>
    ) 
}
export default Navigation