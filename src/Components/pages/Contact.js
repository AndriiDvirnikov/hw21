import React from 'react';
import { Link } from 'react-router-dom';


export default function Contact({props}) {
    
        

    return(
        <div className="contact_hold">
           
           <div className="name">{props.firstName} <Link to ={props.lastName}>{props.lastName} </Link></div>
           <div className="phone">{props.phone}</div>
           
        </div>

    )
}