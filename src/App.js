import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation';

import { appRoutes } from "./routes"


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
      label:'Post page'
  },
  {
      to: '/photos',
      label:'Photo page'
  },
  {
      to: '/acount',
      label:'Acount page'
  },
]

function App() {



  return (
    <div className="App">
      <header className="header">
        <Navigation links = {links}/>
      </header>
      <main className="main_box">
        <Switch>
          {appRoutes.map(rout=>(
            <Route key = {rout.path}{...rout} />
          ))}
          <Route path='*'>
            <p>Page Not Found</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
