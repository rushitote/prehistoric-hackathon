import styles from "./App.module.css";
import Form from "./components/Form";
import Generated from "./GeneratedWebsite/Generated";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
      </div>
    </Router>
  );
}
export default AppRouter;
