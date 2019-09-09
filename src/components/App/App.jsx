import React from "react";
import { connect } from "react-redux";
import { happyAction } from "../actions/app";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Happy you made it!</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  happyState: state.happyState
});

export default connect(
  mapStateToProps,
  { happyAction }
)(App);
