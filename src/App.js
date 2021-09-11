import "./App.css";
import Form from "./components/Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Ok() {
  //get value by JSON.parse(window.localStorage.getItem("formElements"))
  return "ok";
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
        <Switch>
          <Route path="/generated-site" component={Ok} />
        </Switch>
      </div>
    </Router>
  );
}
export default AppRouter;
