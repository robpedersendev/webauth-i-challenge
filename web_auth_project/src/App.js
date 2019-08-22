import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="top_bar">
        <section className="left">Logo goes here</section>
        <section className="middle">Welcome to your app</section>
        <section className="right">
          <ul>
            <li>
              <a href="/home"> Home</a>
            </li>{" "}
            <li>
              <a href="/user-list">User List</a>
            </li>{" "}
            <li>
              <a href="/404-example-page">404 Example page</a>
            </li>{" "}
          </ul>{" "}
        </section>
      </header>
      <section className="body">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </section>
    </div>
  );
}

export default App;
