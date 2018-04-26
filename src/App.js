import React, { Component } from 'react';
import axios from 'axios'
import stockdata from '../data/stock-data.json'
import Stock from './components/Stock'
import './App.css';

class App extends Component {
  state = {
    stocks: []
  }

  
  render() {
console.log(stockdata)
    return (
        <div>
          hello world
        </div>
    );
  }
}

export default App;
