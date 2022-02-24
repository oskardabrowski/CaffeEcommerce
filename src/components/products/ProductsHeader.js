import React from 'react';
import styled from 'styled-components';
import CoffeCup from '../../img/coffecup.png';

const ProdHeader = styled.header`
width: 100%;
height: 60vh;
background-color: black;
position: relative;
padding-bottom: 5rem;
.ProdHeader-image {
    height: 60vh;
    position: absolute;
    top: -50%;
    left: -10%;
    transform: translate(0%, 25%);
}

.ProdHeader-slogan {
    color: white;
    position: absolute;
    right: 25%;
    top: 40%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Slab';

    &-top {
        font-size: 3rem;
    }
    &-bottom {
        font-size: 1.5rem;
        margin-left: 6rem;
    }
}
@media(max-width: 68.75em) { //1100
.ProdHeader-image {
    top: -35%;
    left: -35%;
    width: 50vw;
    height: auto;
}
}
@media(max-width: 62.5em) { //1000

}
@media(max-width: 56.25em) { //900

}
@media(max-width: 50em) { //800

}
@media(max-width: 43.75em) { //700
.ProdHeader-image {
    top: -15%;
    left: -35%;
}
.ProdHeader-slogan {
    right: 10%;
}
}
@media(max-width: 37.5em) { //600

}
@media(max-width: 31.25em) { //500
.ProdHeader-image {
    top: -5%;
    left: -35%;
}
.ProdHeader-slogan {
    &-top {
        font-size: 2rem;
    }
    &-bottom {
        font-size: 1.5rem;
        margin-left: 3rem;
    }
}
}
`;


const ProductsHeader = () => {
    return (
        <ProdHeader>
            <img className="ProdHeader-image" src={CoffeCup} alt={CoffeCup} />
            <div className="ProdHeader-slogan">
                <h1 className="ProdHeader-slogan-top">Our Products</h1>
                <h1 className="ProdHeader-slogan-bottom">find best coffe for you</h1>
            </div>
        </ProdHeader>
    )
}

export default ProductsHeader
