import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navigation from './Components/Navigation';

import { appRoutes } from "./routes"



function App() {



  return (
    <div className="App">
      <header className="header">
        <Navigation />
      </header>
      <main>
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
