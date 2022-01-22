import React from 'react';
import styled from 'styled-components';
import CaffeTemp from "../../img/CaffeTemp.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useGlobalContext } from '../globalContext';
import { useNavigate } from 'react-router-dom';
const Header = styled.header`
width: 100%;
height: 100vh;
position: relative;
.header-template {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    &-img {
        width: 100%;
        height: 100%;
    }

}

.header-slogan {
    position: absolute;
    color: white;
    top: 40%;
    right: 15%;
    transform: translate(0%, -50%);
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Slab';
    &-top {
        font-size: 2.5rem;
    }
    &-bottom {
        font-size: 3.5rem;
        margin-left: 8rem;
    }

    &-button {
        margin-top: 5rem;
        font-size: 1.5rem;
        color: white;
        background: none;
        border: none;
        position: relative;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        z-index: 100;
        align-self: center;

        & > span {
            z-index: 50;
        }

        &:before {
            z-index: 20;
            position: absolute;
            content: "";
            color: white;
            bottom: -1rem;
            width: 120%;
            height: .45rem;
            background-color: #622E00;
            transform: skewX(-35deg);
            transition: all .5s ease-in-out;
        }

        &:hover {
            &:before {
                z-index: 20;
                position: absolute;
                content: "";
                color: white;
                bottom: -1rem;
                width: 120%;
                height: 175%;
                background-color: #622E00;
                transform: skewX(0deg);
            }
        }
    }
}

@media(max-width: 68.75em) { //1100
    .header-template {
        position: relative;
        &-img {
            width: auto;
            position: absolute;
            z-index: 10;
        }
    }
    .header-slogan {
        z-index: 20;
    }
}
@media(max-width: 62.5em) { //1000
    .header-slogan {
        &-top {
            font-size: 1.5rem;
        }
        &-bottom {
            font-size: 2.5rem;
            margin-left: 5rem;
        }
    }
}
@media(max-width: 56.25em) { //900

}
@media(max-width: 50em) { //800

}
@media(max-width: 43.75em) { //700
    .header-slogan {
        &-button {
            margin-top: 2rem;
        }
    }
}
@media(max-width: 37.5em) { //600

}
@media(max-width: 31.25em) { //500
    .header-slogan {
        top: 40%;
        right: 5%;
        &-top {
            font-size: 1.25rem;
        }
        &-bottom {
            font-size: 1.5rem;
            margin-left: 5rem;
        }
        &-button {
            font-size: 1.25rem;
        }
    }
}
`;

const HomeHeader = () => {
    const {isNewPageLoading, setIsNewPageLoading} = useGlobalContext();
    const navigateTo = useNavigate();
    const loadNewPage = (e, path) => {
        e.preventDefault();
        setIsNewPageLoading(!isNewPageLoading);
        setTimeout(() => {
            navigateTo(path);
        }, 2000)
    }
    return (
        <Header>
            <div className="header-slogan">
                <span className="header-slogan-top">Just start your day</span>
                <span className="header-slogan-bottom">full of energy!</span>
                <Link onClick={(e) => loadNewPage(e, "/products")} to="/products" className="header-slogan-button"><span>Our offer</span></Link>
            </div>
            <div className="header-template">
                <img className="header-template-img" src={CaffeTemp} alt={CaffeTemp} />
            </div>
        </Header>
    )
}

export default HomeHeader
