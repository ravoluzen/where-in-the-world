import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Countries from './components/Countries'
import './App.css';
import { Header } from "./components/Header";
import { Country } from "./components/Country";
import { Error } from "./components/Error";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Countries />
        </Route>
        <Route path="/:capital">
          <Country/>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
