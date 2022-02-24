import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/caffe-project-logo.svg';
import {IoMdMenu} from 'react-icons/io';
import {AiOutlineClose} from 'react-icons/ai';
import { useGlobalContext } from './globalContext';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const Nav = styled.nav`
position: fixed;
left: 0;
z-index: 4000;
color: white;
display: flex;
justify-content: space-between;
width: 100%;

.nav-logo {
    &-svg {
        z-index: 4200;
        width: 5rem;
        height: auto;
    }
    margin: 1rem;
}

.nav-options {
    margin: 1rem;
    mix-blend-mode: difference;
    display: flex;
    z-index: 4100;

    &-button {
        width: 5rem;
        height: auto;
        font-family: 'Roboto Slab';
        font-weight: 300;
        font-size: 1.25rem;
        color: white;
        background: none;
        border: none;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    &-menu {
        width: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;


        &:hover {
            cursor: pointer;
        }
    }
}

.nav-menu {
    z-index: 4000;
    position: absolute;
    width: 100%;
    height: 100vh;
    clip-path: circle(0% at 100% 0);
    transition: all .75s ease-in-out;

    & > div {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
    }

    &-colorizerClosed {
        background-color: rgba(98,46,0,.5);
        clip-path: circle(0% at 100% 0);
        transition: all .5s ease-in-out;
    }
    &-colorizer1 {
        background-color: rgba(98,46,0,.5);
        clip-path: circle(110% at 100% 0);
        transition: all .5s ease-in-out;
    }
    &-colorizer2 {
        background-color: rgba(98,46,0,.75);
        clip-path: circle(105% at 100% 0);
        transition: all .5s ease-in-out;
    }

    &-menuClosed {
        background-color: white;
        clip-path: circle(0% at 100% 0);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all .5s ease-in-out;
    }
    &-menu {
        background-color: white;
        clip-path: circle(100% at 100% 0);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all .5s ease-in-out;

        &-link {
            font-family: 'Roboto Slab';
            text-decoration: none;
            font-size: 2rem;
            color: black;
            margin-top: 1rem;
            &:hover {
                cursor: pointer;
            }
        }

        &-active {
            text-decoration: line-through;
            pointer-events: none;
        }
    }

    &-opened {
        clip-path: circle(150% at 100% 0);
    }
}

.navLoader {
    z-index: 5000;
    position: fixed;
    top: 0;
    right: 0;
    width: 0%;
    height: 100vh;

    & > div {
        top: 0;
        right: 0;
        position: absolute;
        height: 100vh;
    }
    &-colorizer1 {
        background-color: rgba(98, 46, 0, .5);
        width: 0%;
        transition: all .5s ease-in-out
    }
    &-colorizer2 {
        background-color: rgba(98, 46, 0, .5);
        width: 0%;
        transition: all .5s ease-in-out;
        transition-delay: .25s;
    }
    &-loader {
        background-color: white;
        width: 100%;
        transition: all .5s ease-in-out;
        transition-delay: .5s;
        overflow: hidden;
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);

        &-coffe {
            position: relative;
            width: 100%;
            height: 100vh;

            &-cup {
                z-index: 5100;
                position: relative;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 25rem;
                height: 20rem;

                &-top {
                    position: absolute;
                    left: 50%;
                    top: 0%;
                    transform: translate(-50%, 0%);
                    width: 20rem;
                    height: 15rem;
                    background-color: rgba(98, 46, 0, 1);
                }
                &-bottom {
                    position: absolute;
                    left: 50%;
                    bottom: 0%;
                    transform: translate(-50%, 0%);
                    width: 20rem;
                    height: 10rem;
                    background-color: rgba(98, 46, 0, 1);
                    border-radius: 50%;
                }
                &-right {
                    position: absolute;
                    left: 80%;
                    top: 5%;
                    width: 5rem;
                    height: 7.5rem;
                    border: 2rem solid rgba(98, 46, 0, 1);
                    border-radius: 0% 100% 100% 0% / 100% 30% 70% 0% ;
                }
                &-text {
                    position: absolute;
                    left: 50%;
                    bottom: 50%;
                    transform: translate(-50%, 0%);
                    font-family: 'Roboto Slab';
                    font-size: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
            &-booble1 {
                position: absolute;
                width: 7.5rem;
                height: 7.5rem;
                background-color: rgba(98, 46, 0, .25);
                border-radius: 50%;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: moveTop 8s linear infinite;
            }
            &-booble2 {
                position: absolute;
                width: 6rem;
                height: 6rem;
                background-color: rgba(98, 46, 0, .15);
                border-radius: 50%;
                top: 60%;
                left: 47.5%;
                transform: translate(-50%, -50%);
                animation: moveTop2 7s linear infinite;
            }
            &-booble3 {
                position: absolute;
                width: 5rem;
                height: 5rem;
                background-color: rgba(98, 46, 0, .35);
                border-radius: 50%;
                top: 30%;
                left: 52%;
                transform: translate(-50%, -50%);
                animation: moveTop3 6s linear infinite;
            }
        }
    }
}

@keyframes moveTop {
    0% {
        top: 60%;
        left: 49%;
        opacity: 1;
    } 25% {
        top: 40%;
        left: 52%;
    } 50%  {
        top: 20%;
        left: 48%;
    } 100% {
        top: 0%;
        left: 53%;
        opacity: 0;
    }
}
@keyframes moveTop2 {
    0% {
        top: 60%;
        left: 47.5%;
        opacity: 1;
    } 25% {
        top: 40%;
        left: 50%;
    } 50%  {
        top: 20%;
        left: 46%;
    } 100% {
        top: 0%;
        left: 51%;
        opacity: 0;
    }
}
@keyframes moveTop3 {
    0% {
        top: 60%;
        left: 53%;
        opacity: 1;
    } 25% {
        top: 40%;
        left: 52%;
    } 50%  {
        top: 20%;
        left: 54%;
    } 100% {
        top: 0%;
        left: 50%;
        opacity: 0;
    }
}
`;

const Navbar = () => {
    let {isNewPageLoading, isMenuOpen, setIsMenuOpen, setIsNewPageLoading, setIsCartOpen, isCartOpen, dispatch} = useGlobalContext();
    const navigateTo = useNavigate();
    const loadNewPage = (e, path) => {
        e.preventDefault();
        const menu = document.querySelector('.nav-menu');
        setIsNewPageLoading(!isNewPageLoading);
        setIsMenuOpen(!isMenuOpen)
        setTimeout(() => {
            navigateTo(path);
        }, 2000)
    }

    useEffect(() => {
        const colorizer1 = document.querySelector('.navLoader-colorizer1');
        const colorizer2 = document.querySelector('.navLoader-colorizer2');
        const loader = document.querySelector('.navLoader-loader');
        const NavLoader = document.querySelector('.navLoader');

        if(isNewPageLoading) {
            NavLoader.style.width = '100%';
            colorizer1.style.width = '100%';
            colorizer2.style.width = '100%';
            loader.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';

            setTimeout(() => {
                colorizer1.style.width = '0%';
                colorizer2.style.width = '0%';
                window.scrollTo(0,0);
            }, 1500)
        } else {
            loader.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
            setTimeout(() => {
                NavLoader.style.width = '0%';
                loader.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
            }, 1250)
        }

    }, [isNewPageLoading])

    return (
        <Nav>
            <div className="nav-logo">
                <img className="nav-logo-svg" src={Logo} alt={Logo} />
            </div>
            <div className="nav-options">
                <button className="nav-options-button" onClick={() => setIsCartOpen(!isCartOpen)}>CART</button>
                <div className="nav-options-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <AiOutlineClose /> : <IoMdMenu />}</div>
            </div>
            <div className={`nav-menu ${isMenuOpen ? 'nav-menu-opened' : '' }`}>
                <div className={`${isMenuOpen ? 'nav-menu-colorizer1' : 'nav-menu-colorizerClosed'}`}></div>
                <div className={`${isMenuOpen ? 'nav-menu-colorizer2' : 'nav-menu-colorizerClosed'}`}></div>
                <div className={`${isMenuOpen ? 'nav-menu-menu' : 'nav-menu-menuClosed'}`}>
                    <NavLink onClick={(e) => loadNewPage(e, "/")} to="/" end className={(data) => data.isActive ? "nav-menu-menu-link nav-menu-menu-active" : "nav-menu-menu-link"}>Home</NavLink>
                    <NavLink onClick={(e) => loadNewPage(e, "/products")} to="/products" className={(data) => data.isActive ? "nav-menu-menu-link nav-menu-menu-active" : "nav-menu-menu-link"}>Products</NavLink>
                    <NavLink onClick={(e) => loadNewPage(e, "/about")} to="/about" className={(data) => data.isActive ? "nav-menu-menu-link nav-menu-menu-active" : "nav-menu-menu-link"}>About</NavLink>
                    <NavLink onClick={(e) => loadNewPage(e, "/contact")} to="/contact" className={(data) => data.isActive ? "nav-menu-menu-link nav-menu-menu-active" : "nav-menu-menu-link"}>Contact</NavLink>
                </div>
            </div>
            <div className="navLoader">
                <div className="navLoader-colorizer1"></div>
                <div className="navLoader-colorizer2"></div>
                <div className="navLoader-loader">
                    <div className="navLoader-loader-coffe">
                        <div className="navLoader-loader-coffe-booble1"></div>
                        <div className="navLoader-loader-coffe-booble2"></div>
                        <div className="navLoader-loader-coffe-booble3"></div>
                        <div className="navLoader-loader-coffe-cup">
                            <div className="navLoader-loader-coffe-cup-top"></div>
                            <div className="navLoader-loader-coffe-cup-bottom"></div>
                            <div className="navLoader-loader-coffe-cup-right"></div>
                            <div className="navLoader-loader-coffe-cup-text"><span>Caffe</span><span>Loading...</span></div>
                        </div>
                    </div>
                </div>
            </div>
            {isCartOpen && <Cart />}
        </Nav>
    )
}

export default Navbar
