import React, { Component } from 'react';
import axios from 'axios';
import stockdata from '../data/stock-data.json';
import StockList from './components/StockList';
import Dashboard from "./components/Dashboard";
import {
  Route,
  Link,
  Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    stocks: [stockdata]
  }

  render() {
  const stockListCom = () => { (<StockList stocks />) }
console.log(stockdata)
    return (
        <div>
        <Router>
          <Switch>
            <Route exact path '/StockList' component {StockList}>
        </Switch>
        </Router>
      </div>
      );
    }
  }
  
  export default App;
