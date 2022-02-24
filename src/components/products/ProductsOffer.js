import React, { useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {products} from './products-data';
import {BsFillCartPlusFill} from 'react-icons/bs';
import {RiLoader2Fill} from 'react-icons/ri';
import { useGlobalContext } from '../globalContext';
const ProductsContainer = styled.div`
.products {
    background-color: black;
    width: 100%;
    height: auto;
    color: black;
    text-align: center;

    &-product {
        width: 27.5rem;
        height: 17.5rem;
        display: inline-block;
        margin: 1rem;
        background-color: red;
        overflow: hidden;
        position: relative;
        border-radius: 15px;

        &:hover {
            .products-product-img-photo {
                width: 200%;
                opacity: 0;
                left: 50%;
            }

            & > h2 {
                left: 0rem;
            }

            &>button {
                color: white;
                background-color: black;
            }
        }
        & > h2 {
            font-family: 'Roboto Slab';
            top: 0rem;
            position: absolute;
            left: -105%;
            z-index: 1000;
            transition: all .5s ease-in-out;
            background-color: black;
            padding: .75rem;
            color: white;
            border-radius: 0px 0px 15px 0px;
        }
        & > .spinningStyle {
            display: flex;
            align-items: center;
        }
        & > button {
            position: absolute;
            bottom: 0rem;
            right: 0rem;
            z-index: 500;
            width: 12rem;
            height: 3rem;
            font-size: 1.5rem;
            background: none;
            border: none;
            border-radius: 15px 0px 0px 0px;
            color: black;
            background-color: white;
            transition: all .5s ease-in-out;

            .addSpin {
                font-size: 2rem;
                margin-right: .5rem;
                margin-left: 1rem;
                animation: spin 2s linear normal infinite;
            }

            &:hover {
                cursor: pointer;
            }

            & > span {
                margin-left: 0rem.5rem;
            }
        }
        &-img {
            z-index: 200;
            & > img {
                position: absolute;
                top: 0rem;
                left: 0rem;
                width: 100%;
                height: 100%;
                opacity: 1;
            }

            &-photo {
                transition: all .5s ease-in-out;
                z-index: 300;
            }
        }
    }

    & > div {
        color: white;
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

@media(max-width: 31.25em) {
    .products {
    background-color: black;
    width: 100%;
    height: auto;
    color: white;
    text-align: center;

    &-product {
        width: 100%;
        height: 13.5rem;
        display: inline-block;
        background-color: red;
        overflow: hidden;
        position: relative;
        border-radius: 15px;
        mix-blend-mode: normal;
        margin: 0;

        & > h2 {
            left: 5%;
            color: black;
            background-color: white;
            padding: .5rem;
            border-radius: 10px;
            mix-blend-mode: normal;
            font-size: 1rem;
        }
        & > button {
            position: absolute;
            bottom: 0rem;
            right: 0rem;
            color: black;
            background-color: white;
            padding: .25rem;
            border-radius: 10px;
            mix-blend-mode: normal;
            font-size: 1rem;
            width: 8rem;
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


const ProductsOffer = () => {
    const {isNewPageLoading, cartItems, totalCost,setTotalCost, setIsNewPageLoading, dispatch} = useGlobalContext();
    const [isAdding, setIsAdding] = useState('');
    // const {dispatch} = useCartContext();
    const navigateTo = useNavigate();
    const loadNewPage = (e, path) => {
        e.preventDefault();
        setIsNewPageLoading(!isNewPageLoading);
        setTimeout(() => {
            navigateTo(path);
        }, 2000)
    }
    const AddFromOfferHandler = (id, index, cost) => {
        dispatch({type: 'ADD', itemId: parseInt(id)});
        const newCost = totalCost + cost;
        setTotalCost(newCost)
        setIsAdding(`spinning-${index}`);
        setTimeout(() => {
            setIsAdding('');
        }, 700);
    }
    return (
        <ProductsContainer>
            <div className="products">
                {products.map((el, index) => {
                    const {id, Name, Cost, CostNum, Photo, Placeholder} = el;
                    return <div className="products-product" key={index}>
                        <h2 className="products-product-name">{Name} {Cost} zł</h2>
                        <Link onClick={(e) => loadNewPage(e, `/products/product/${id}`)} className="products-product-img" to={`/products/product/${id}`}>
                            <img className="products-product-img-photo" src={Photo} alt={Photo} />
                            <img src={Placeholder} alt={Placeholder} />
                        </Link>
                        <button className={isAdding == `spinning-${index}` ? 'spinningStyle' : ''} onClick={() => AddFromOfferHandler(id, index, CostNum)} >{isAdding == `spinning-${index}` ? <SpinningBtn /> : <AddBtn />}</button>
                    </div>
                })}
            </div>
        </ProductsContainer>
    )
}

export default ProductsOffer


