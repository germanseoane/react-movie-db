import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchForm from "./SearchForm";
import Movies from "./Movies";
import Error from "./Error";
import SingleMovie from "./SingleMovie";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchForm />
          <Movies />
        </Route>
        <Route path="/movie/:id">
          <SingleMovie />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
