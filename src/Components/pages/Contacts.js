import React from 'react'
import { Route, Switch } from 'react-router'
import { userRoutes } from '../../routes/users'
import Navigation from '../Navigation'

import { PageHeader } from '../PageHeader'
import InfoContacts from './InfoContact'
import { UserRoutes } from '../../routes/users'

const links = [
  {
      to: '/contacts/Стинсовський',
      label:'Стинсовський'
  },
  
]

const ContactsPage = ()=>{
    return (
      <>
        <PageHeader>Contacts Page</PageHeader>
        
        <InfoContacts>
          
          <Navigation links={links}/>
          </InfoContacts>
        <Switch>
         {UserRoutes.map(rout =>{
           <Route key={rout.path} {...rout} />
         })}
          
        </Switch>
        
      </>
      )
  }
  export default ContactsPage