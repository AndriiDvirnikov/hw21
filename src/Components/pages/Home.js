import React from 'react'
import welcome from '../../img/welcom.jpg'
import { PageHeader } from '../PageHeader'

const HomePage = ()=>{
    return (
      <>
       {/* <PageHeader>Home Page</PageHeader>*/}
        <div className = "home">
          <img src= {welcome}/>
          <p className="welcome">TO my Home work</p>
        </div>
        
      </>
      )
  }
  export default HomePage