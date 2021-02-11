import {BrowserRouter as Router, useHistory, Switch, Route, Redirect} from "react-router-dom"
import TempLanding from "./pages/TempLanding"

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/coming-soon"/>
          )} />

          <Route path="/coming-soon" component={TempLanding} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
