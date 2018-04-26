import React, { Component } from 'react'
// import styled from 'styled-components';

// const stockContiner = styled.div`
// display: flex
// flex-direction: row`
class Stock extends Component {
  render() {
    var stock = this.props.stocks.find((stock) => stock.name === this.props.match.params.name)
    return (
        
      <div>
          {/* <stockContiner> */}
        <h2>{stock.name}</h2>
        <ul>
          <li>Current Price: {stock.lastPrice}</li>
          <li>Change: {stock.change}</li>
          <li>High: {stock.high}</li>
          <li>Low: {stock.low}</li>
        </ul>
        {/* </stockContiner> */}
      </div>
    );
  }
}

export default Stock;