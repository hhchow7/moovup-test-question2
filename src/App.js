import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";

import AllFriends from "./containers/AllFriends";
import YourFriend from "./containers/YourFriend";
import NotFound from "./containers/NotFound";

function App(props) {
  console.log = () => {};
  return (
    <div className="App">
      <div className="main">
        <Switch>
          <Redirect from="/" exact to="/friends" />
          <Route path="/friends" exact component={AllFriends} />
          <Route path="/friends/:id" exact component={YourFriend} />
          <Route path='*' exact component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
