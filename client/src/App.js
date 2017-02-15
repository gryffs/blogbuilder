import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occured</div>)
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Getting this message is a good thing: {this.props.data.testString}
        </p>
      </div>
    );
  }
}

const TestString = gql`
  query TestString {
    testString
  }
`;

const AppWithData = graphql(TestString)(App);

export default AppWithData;
