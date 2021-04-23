import React from "react"
import { Link } from "react-router-dom"

const links = [
    {
        to: '/',
        label:'Home page'
    },
    {
        to: '/contacts',
        label:'Contacts page'
    },
    {
        to: '/about',
        label:'About page'
    },
    {
        to: '/photos',
        label:'Photo page'
    },
]

 const Navigation = ()=> {
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