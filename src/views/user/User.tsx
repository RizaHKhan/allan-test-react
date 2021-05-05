import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

export default function User() {
  return (
    <Router>
      <div className="user">
        <NavLink
          to="/todos"
          className="user__link mr2"
          activeClassName="active-link"
        >
          Todos
        </NavLink>
        <NavLink
          to="/posts"
          className="user__link mr2"
          activeClassName="active-link"
        >
          Posts
        </NavLink>
        <NavLink
          to="/user-info"
          className="user__link mr2"
          activeClassName="active-link"
        >
          User Info
        </NavLink>
      </div>
      <div className="user__output">
        <Switch>
          <Route path="/todos">Todos</Route>
          <Route path="/posts">Posts</Route>
          <Route path="/user-info">User Info</Route>
        </Switch>
      </div>
    </Router>
  );
}
