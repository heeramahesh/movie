
import './App.css';
import Login from "./pages/Login"
import Movies from "./pages/Movies"
import Details from "./pages/Details"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">

       <Router>
         <>
        <Switch>
        <Route exact path="/">
            <Login  />
            </Route>
            <Route exact path="/movies">
            <Movies />
            </Route>
            <Route exact path="/details/:id">
              <Details />
            </Route>
        </Switch>
        </>
      </Router> 
    </div>
  );
}

export default App;
  