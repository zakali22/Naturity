import {Switch, Route, Redirect} from "react-router-dom"
import TempLanding from "./pages/TempLanding"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/coming-soon"/>
        )} />

        <Route path="/coming-soon" component={TempLanding} />
      </Switch>
    </div>
  );
}

export default App;
