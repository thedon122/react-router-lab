import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import styled from 'styled-components';

// const nav = styled.div`
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     background-color: #333;
// `
// const nav_item = styled.div`
//     float: left;
// `

class Navigation extends Component {
    render() {
        return (

            <div className="nav">
                <div className="nav_item"><Link to="/stocks">Home</Link></div>
                <div className="nav_item"><Link to="/about">About</Link></div>
            </div>

        );
    }
}

export default Navigation;
