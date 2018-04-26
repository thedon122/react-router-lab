import React, { Component } from 'react';
import Stock from 'Stock';

class StockList extends Component {
    render() {
        const individualStock = this.props.stocks.map((banana) => {
            return <Stock stock={banana} />
        })
        return (

            <div>
                {individualStock}
            </div>
        );
}
}

export default Stock;