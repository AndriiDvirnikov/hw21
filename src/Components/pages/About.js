import React from 'react'
import user from '../posts/User';

import { PageHeader } from '../PageHeader'
import Student from '../posts/Student';




const AboutPage = ()=>{
  
  return (
      <>
        <PageHeader>Post Page</PageHeader>
      
        <Student name={user.name} nickName={user.nickName} age = {user.age} />
        
        
      </>
      )
  }
  export default AboutPage