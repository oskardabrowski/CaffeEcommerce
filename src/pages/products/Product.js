import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { BrowserRouter as Route, useParams } from 'react-router-dom';
import {BsFillCartPlusFill} from 'react-icons/bs';
import { useGlobalContext } from '../../components/globalContext';
import {products} from '../../components/products/products-data';
import {RiLoader2Fill} from 'react-icons/ri';
const ProductContainer = styled.div`
width: 100%;
height: auto;
background: black;
color: white;
padding-top: 7.5rem;
display: flex;
.ProductImg {
    margin: 0rem 1rem;
    width: 50%;
    border-radius: 15px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
}
.ProductDesc {
    margin: 0rem 1rem;
    width: 50%;

    & > h2 {
        font-family: 'Roboto Slab';
        margin-bottom: 1.5rem;
        width: max-content;
        position: relative;
        font-size: 1.75rem;

        &:before {
            content: '';
            width: 100%;
            height: .5rem;
            background: #622E00;
            position: absolute;
            bottom: -.5rem;
            transform: skewX(-45deg);
        }
    }

    & > p {
        font-family: 'Rubik';
        font-size: 1.2rem;
    }
    & > .spinningStyle {
        display: flex;
        align-items: center;
    }

    & > button {
        margin-top: 5rem;
        border: none;
        background: none;
        color: white;
        font-size: 1.5rem;
        transition: all .5s ease-in-out;

        .addSpin {
            font-size: 2rem;
            margin-right: .5rem;
            animation: spin 2s linear normal infinite;
        }

        & > span {
            margin-left: .5rem;
        }

        &:hover {
            cursor: pointer;
            color: #622E00;
        }
    }
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@media(max-width: 56.25em) { //900
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
.ProductImg {
    margin: 0rem 0rem;
    width: 100%;
    border-radius: 0px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
}
.ProductDesc {
    margin: 0rem 0rem;
    width: 90%;

    & > h2 {
        font-family: 'Roboto Slab';
        margin-bottom: 1.5rem;
        width: max-content;
        position: relative;
        font-size: 1.75rem;

        &:before {
            content: '';
            width: 100%;
            height: .5rem;
            background: #622E00;
            position: absolute;
            bottom: -.5rem;
            transform: skewX(-45deg);
        }
    }

    & > p {
        font-family: 'Rubik';
        font-size: 1.2rem;
    }

    & > button {
        margin-top: 5rem;
        border: none;
        background: none;
        color: white;
        font-size: 1.5rem;
        transition: all .5s ease-in-out;

        & > span {
            margin-left: .5rem;
        }

        &:hover {
            cursor: pointer;
            color: #622E00;
        }
    }
}
}
`;
const SpinningBtn = () => {
    return (
        <>
            <RiLoader2Fill className="addSpin" /><span>Adding...</span>
        </>
    )
}
const AddBtn = () => {
    return (
        <>
            <BsFillCartPlusFill /><span>Add to cart</span>
        </>
    )
}


const Product = () => {
    const {id} = useParams();
    const selectedProduct = products.filter((el) => { if (el.id == id) {return el}});
    const {Name, Cost, Description, Photo} = selectedProduct[0];
    const {setIsNewPageLoading, dispatch} = useGlobalContext();
    const [isAdding, setIsAdding] = useState('');
    useEffect(() => {
        setIsNewPageLoading(false);
    }, []);
    const AddFromOfferHandler = (id) => {
        dispatch({type: 'ADD', itemId: parseInt(id)});
        setIsAdding(`spinning`);
        setTimeout(() => {
            setIsAdding('');
        }, 700);
    };
    return (
        <>
            <ProductContainer>
                <div className="ProductImg">
                    <img src={Photo} alt={Photo} />
                </div>
                <div className="ProductDesc">
                    <h2>{Name} {Cost} zł</h2>
                    <p>{Description}</p>
                    <button className={isAdding == `spinning` ? 'spinningStyle' : ''} onClick={() => AddFromOfferHandler(id)}>{isAdding == `spinning` ? <SpinningBtn /> : <AddBtn />}</button>
                </div>
            </ProductContainer>
            <Footer />
        </>
    )
}

export default Product
