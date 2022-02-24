import React from 'react';
import styled from 'styled-components';
import CoffeCup from '../img/coffecup.png';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Err404 = styled.div`
color: white;
background: black;
width: 100%;
height: 100vh;
z-index: 10000;
position: fixed;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
        img {
        width: 15rem;
    }

    span {
        font-size: 15rem;
        margin: .5rem;
    }
    div {
        position: absolute;
        font-size: 1.2rem;
    }
    .HomeLink {
        color: white;
        font-size: 1.5rem;
        text-decoration: none;
        font-family: 'Roboto Slab';
        transition: all .5s ease-in-out;

        &:hover {
            cursor: pointer;
            color: blue;
        }
    }
}
`;

const Error404 = () => {
    return (
        <Err404>

            <div>
                <span>4</span>
                <img src={CoffeCup} alt={CoffeCup} />
                <span>4</span>
                <div>Error</div>
            </div>
            <div>
                <Link className="HomeLink" to="/">Return Home</Link>
            </div>
        </Err404>
    )
}

export default Error404
