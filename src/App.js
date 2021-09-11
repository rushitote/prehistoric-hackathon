import styles from "./App.module.css";
import Form from "./components/Form";
import WarpSpeed from "./GeneratedWebsite/WarpSpeed"
import Generated from "./GeneratedWebsite/Generated"
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className={styles.App}>
      <Form />
    </div>
    </ThemeProvider>
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
          <Route path="/generated-site" component={Generated} />
        </Switch>
        <Switch>
          <Route path="/warp" component={WarpSpeed}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default AppRouter;
