import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Link, NavLink } from 'react-router-dom';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import HomeDescCaffe from '../../img/home/HomeDescCaffe.jpg';
import {BsArrowRightShort} from 'react-icons/bs';
import { useGlobalContext } from '../globalContext';
import { useNavigate } from 'react-router-dom';
import Bean1 from "../../img/home/coffeBeans/bean1.png";
import Bean2 from "../../img/home/coffeBeans/bean2.png";
import Bean3 from "../../img/home/coffeBeans/bean3.png";
import Bean4 from "../../img/home/coffeBeans/bean4.png";
import HomeHeader from './HomeHeader';
import Coffe1 from "../../img/home/coffe1.png";
import Coffe2 from "../../img/home/coffe2.png";
import CoffeTry from "../../img/home/caffe-try.png";
import {IoPricetags} from 'react-icons/io5';
import {MdDeliveryDining, MdSecurity, MdHighQuality} from 'react-icons/md';
import Map from '../Map';
import Footer from '../Footer';


const ParralaxScene = styled.div`
.parallax {
    background-color: black;
    color: white;
    &-layer1 {
        width: 100%;
        display: flex;
        margin-top: 5rem;
        &-imgdiv {
            width: 22.5rem;
            margin-left: 2rem;
            &-img {
                width: 100%;
                height: auto;
            }
        }
        &-text {
            width: 45rem;
            margin-left: 2rem;

            &-header {
                font-family: 'Roboto Slab';
                position: relative;
                width: max-content;
                &:before {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: .5rem;
                    background-color: #622E00;
                    bottom: -1rem;
                    transform: skewX(-45deg);
                }
            }

            &-desc {
                font-family: 'Rubik';
                margin-top: 2rem;
                font-size: 1.2rem;
                margin-bottom: 3rem;
            }

            &-button {
                background: none;
                border: none;
                color: white;
                font-family: 'Roboto Slab';
                font-size: 1rem;
                text-decoration: none;
                position: relative;
                width: 8rem;

                & > span {
                    position: absolute;
                    top: 0;
                    width: 8rem;
                    z-index: 100;
                    display: flex;
                    align-items: center;
                }
                &:before {
                    z-index: 20;
                    position: absolute;
                    content: '';
                    width: 7.5rem;
                    height: .25rem;
                    background-color: #622E00;
                    bottom: -2rem;
                    left: -.5rem;
                    transform: skewX(-45deg);
                    transition: all .5s ease-in-out;
                }
                &:hover {
                    z-index: 100;
                    &:before {
                        z-index: 20;
                        width: 7.5rem;
                        height: 2.5rem;
                        transform: skewX(0deg);
                    }
                }
                &-arrow {
                    font-size: 1.5rem;
                }
            }
        }
    }
    &-layer2 {
        width: 100%;
        display: flex;
        margin-top: 5rem;
        &-imgdiv {
            width: 35rem;
            margin-left: 2rem;
            &-img {
                width: 100%;
                height: auto;
            }
        }
        &-text {
            width: 45rem;
            margin-left: 2rem;

            &-header {
                font-family: 'Roboto Slab';
                position: relative;
                width: max-content;
                &:before {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: .5rem;
                    background-color: #622E00;
                    bottom: -1rem;
                    transform: skewX(-45deg);
                }
            }

            &-desc {
                font-family: 'Rubik';
                margin-top: 2rem;
                font-size: 1.2rem;
                margin-bottom: 3rem;
            }

            &-button {
                background: none;
                border: none;
                color: white;
                font-family: 'Roboto Slab';
                font-size: 1rem;
                text-decoration: none;
                position: relative;
                width: 8rem;

                & > span {
                    position: absolute;
                    top: 0;
                    width: 8rem;
                    z-index: 100;
                    display: flex;
                    align-items: center;
                }
                &:before {
                    z-index: 20;
                    position: absolute;
                    content: '';
                    width: 8.5rem;
                    height: .25rem;
                    background-color: #622E00;
                    bottom: -2rem;
                    left: -.5rem;
                    transform: skewX(-45deg);
                    transition: all .5s ease-in-out;
                }
                &:hover {
                    z-index: 100;
                    &:before {
                        z-index: 20;
                        width: 8.5rem;
                        height: 2.5rem;
                        transform: skewX(0deg);
                    }
                }
                &-arrow {
                    font-size: 1.5rem;
                }
            }
        }
    }
}

.Bean1 {
    margin-left: 30%;
}
.Bean2 {
    margin-left: 50%;
}
.Bean3 {
    margin-left: 60%;
}
.Bean4 {
    margin-left: 80%;
}
.Bean5 {
    margin-left: 15%;
}
.Bean6 {
    margin-left: 5%;
}
.Bean7 {
    margin-left: 17.5%;
}
.Bean8 {
    margin-left: 37.5%;
}
.Bean8 {
    margin-left: 73%;
}

.whyUs {
    width: 100%;
    position: relative;
    &-text {
        top: 0;
        left: 0;
        position: relative;
        background: linear-gradient(315deg, #622E00, #341800cd );
        padding: 10rem 0rem 10rem 0rem;
        z-index: 100;
        width: 100%;
        display: flex;
        flex-direction: column;
        -webkit-clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);

        &-header {
            margin: 0rem 0rem 2rem 3rem;
            font-family: 'Roboto Slab';
            font-size: 2.5rem;
            position: relative;
            width: max-content;
            &:before {
                position: absolute;
                content: "";
                width: 100%;
                height: .5rem;
                background-color: black;
                bottom: -.5rem;
                left: -.5rem;
                transform: skewX(-45deg);
            }
        }
        &-container {
            display: flex;
            justify-content: space-between;
            width: 95%;
            align-self: center;

        }
    }
}

.container-top {
    &-img {
        width: 50%;
        &>img {
            width: 100%;
            height: auto;
        }
    }
    &-list {
        width: 50%;
        display: flex;
        align-items: center;
        & > ul {
            list-style-type: none;
            width: 100%;
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-family: 'Rubik';

            & > li {
                font-size: 2rem;
                display: flex;
                align-items: center;
                & > .icon {
                    margin: 0rem 1rem;
                    font-size: 3rem;
                }
            }
        }
    }
}
.container-bottom {
    &-img {
        width: 50%;
        &>img {
            width: 100%;
            height: auto;
        }
    }

    &-text {
        width: 50%;
        &> p {
            padding: 0rem 1rem;
            font-family: 'Rubik';
            font-size: 1.2rem;
        }
        &> h2 {
            padding: 1rem 1rem;
            font-family: 'Roboto Slab';
            font-size: 2rem;
            margin-bottom: 1rem;
            position: relative;
            width: max-content;
            &:before {
                position: absolute;
                content: '';
                width: 100%;
                height: .5rem;
                background-color: black;
                bottom: .5rem;
                left: .5rem;
                transform: skewX(-45deg);
            }
        }
    }
}

@media(max-width: 68.75em) { //1100
.container-top {
    &-list {
        & > ul {
            & > li {
                font-size: 1.5rem;
                & > .icon {
                    font-size: 2rem;
                }
            }
        }
    }
}
.container-bottom {
    &-text {
        &> p {
            padding: 0rem 1rem;
            font-family: 'Rubik';
            font-size: 1rem;
        }
        &> h2 {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
    }
}
}
@media(max-width: 62.5em) { //1000

}
@media(max-width: 56.25em) { //900
.parallax {
    &-layer1 {
        flex-direction: column;
        align-items: center;

        &-text {
            &-button {
                display: none;
            }
        }
    }
    &-layer2 {
        flex-direction: column;
        align-items: center;
        margin-top: 0rem;
        &-imgdiv {
            display: none;
        }
    }
}
}
@media(max-width: 50em) { //800
.parallax {
    &-layer1 {
        &-text {
            width: 100%;
        }
    }
    &-layer2 {
        flex-direction: column;
        align-items: center;
        margin-top: 0rem;
        &-imgdiv {
            display: none;
        }
        &-text {
            width: 95%;
            &-header {
                font-family: 'Roboto Slab';
                position: relative;
                &:before {
                    position: absolute;
                    content: '';
                    width: 13rem;
                    height: .5rem;
                    background-color: #622E00;
                    bottom: -1rem;
                    transform: skewX(-45deg);
                }
            }

            &-desc {
                font-family: 'Rubik';
                margin-top: 2rem;
                font-size: 1.2rem;
                margin-bottom: 3rem;
            }

            &-button {
                background: none;
                border: none;
                color: white;
                font-family: 'Roboto Slab';
                font-size: 1rem;
                text-decoration: none;
                position: relative;
                width: 8rem;

                & > span {
                    position: absolute;
                    top: 0;
                    width: 8rem;
                    z-index: 100;
                    display: flex;
                    align-items: center;
                }
                &:before {
                    z-index: 20;
                    position: absolute;
                    content: '';
                    width: 8.5rem;
                    height: .25rem;
                    background-color: #622E00;
                    bottom: -2rem;
                    left: -.5rem;
                    transform: skewX(-45deg);
                    transition: all .5s ease-in-out;
                }
                &:hover {
                    z-index: 100;
                    &:before {
                        z-index: 20;
                        width: 8.5rem;
                        height: 2.5rem;
                        transform: skewX(0deg);
                    }
                }
                &-arrow {
                    font-size: 1.5rem;
                }
            }
        }
    }
}
.Bean1 {
    display: none;
}
.Bean2 {
    display: none;
}
.Bean3 {
    display: none;
}
.Bean4 {
    display: none;
}
.Bean5 {
    display: none;
}
.Bean6 {
    display: none;
}
.Bean7 {
    display: none;
}
.Bean8 {
    display: none;
}
.Bean8 {
    display: none;
}
.Bean9 {
    display: none;
}
.container-top {
    flex-direction: column-reverse;
    width: 100%;
    &-img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &>img {
            width: 50%;
        }
    }
    &-list {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > ul {
            margin: .5rem 0rem;
            width: 50%;

            & > li {
                font-size: 1.5rem;
                & > .icon {
                    font-size: 2rem;
                }
            }
        }
    }
}
.container-bottom {
    flex-direction: column;
    width: 100%;
    &-img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &>img {
            width: 50%;
        }
    }

    &-text {
        width: 100%;
        &> p {
            font-size: 1rem;
        }
        &> h2 {
            font-size: 1.5rem;
        }
    }
}
.whyUs {
    &-text {
        &-header {
            font-size: 1.5rem;
        }
    }
}
}
@media(max-width: 43.75em) { //700
.parallax {
    &-layer1 {
        &-text {
            padding: 0;
            margin: 0;
            width: 95%;
            & > p {
                text-align: justify;
            }
        }
    }
}
}
@media(max-width: 37.5em) { //600
.parallax {
    &-layer1 {
        &-text {
            font-size: 1rem;
            &-header {
                font-size: 1.5rem;
            }
        }
    }
}
}
@media(max-width: 31.25em) { //500
.parallax {
    &-layer1 {
        margin-top: 0rem;
    }
    &-layer2 {
        margin-top: 10rem;
        &-text {
            &-desc {
                font-size: 1rem;
            }
        }
    }
}
.container-top {
    flex-direction: column-reverse;
    width: 100%;
    &-img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &>img {
            width: 75%;
        }
    }
    &-list {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > ul {
            margin: .5rem 0rem;
            width: 100%;

            & > li {
                font-size: 1.5rem;
                margin: .5rem;
                & > .icon {
                    font-size: 2rem;
                }
            }
        }
    }
}
.container-bottom {
    flex-direction: column;
    width: 100%;
    &-img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &>img {
            width: 75%;
        }
    }

    &-text {
        width: 100%;
        &> p {
            font-size: 1rem;
            text-align: justify
        }
        &> h2 {
            font-size: 1.5rem;
        }
    }
}
}

.LongestFooter {
    & > .footer-bottom {
        min-width: 25rem;
    }
}

`;

const HomeDescParralax = () => {
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
        <>
        <ParralaxScene>
            <Parallax className='parallax' pages={5.24}>
                <HomeHeader />
                <ParallaxLayer className='parallax-layer1' offset={1.25} speed={.3}>
                    <div className='parallax-layer1-imgdiv'>
                        <img className='parallax-layer1-imgdiv-img' src={HomeDescCaffe} alt={HomeDescCaffe} />
                    </div>
                    <div className='parallax-layer1-text'>
                        <h1 className='parallax-layer1-text-header'>Perfect coffe every morning!</h1>
                        <p className='parallax-layer1-text-desc'>Cupcake ipsum dolor sit amet shortbread croissant. Ice cream candy canes bear
                        claw chocolate bar gingerbread icing cake jelly-o. Powder lollipop donut chocolate
                        cake apple pie. Icing cupcake cupcake topping chupa chups I love croissant.
                        Lollipop cake powder jelly beans oat cake fruitcake wafer. Tart shortbread halvah
                        liquorice liquorice bonbon topping gingerbread gingerbread. Candy canes brownie
                        cupcake lollipop I love wafer bonbon. Cupcake soufflé powder I love cookie ice
                        cream chocolate bar. Chupa chups icing jelly-o gummi bears bear claw apple pie
                        pie muffin I love.</p>
                        <NavLink onClick={(e) => loadNewPage(e, "/about")} to="/about" className='parallax-layer1-text-button'><span>Read more <BsArrowRightShort className='parallax-layer1-text-button-arrow' /></span></NavLink>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className="Bean1" offset={1.999} speed={1}>
                    <img src={Bean1} alt={Bean1} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean5" offset={1.999} speed={3}>
                    <img src={Bean1} alt={Bean1} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean2" offset={1.999} speed={1.8}>
                    <img src={Bean2} alt={Bean2} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean9" offset={1.999} speed={1.8}>
                    <img src={Bean2} alt={Bean2} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean3" offset={1.999} speed={1.2}>
                    <img src={Bean3} alt={Bean3} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean6" offset={1.999} speed={2.}>
                    <img src={Bean3} alt={Bean3} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean4" offset={1.999} speed={2}>
                    <img src={Bean4} alt={Bean4} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean7" offset={1.999} speed={2}>
                    <img src={Bean4} alt={Bean4} />
                </ParallaxLayer>
                <ParallaxLayer className="Bean8" offset={1.999} speed={1.25}>
                    <img src={Bean4} alt={Bean4} />
                </ParallaxLayer>
                <ParallaxLayer className="whyUs" offset={2} speed={1}>
                    <div className="whyUs-text">
                        <h1 className="whyUs-text-header">Why Us?</h1>
                        <div className="whyUs-text-container container-top">
                            <div className="container-top-list">
                                <ul>
                                    <li><IoPricetags className="icon" /><span>Good Price</span></li>
                                    <li><MdDeliveryDining className="icon" /><span>Fast delivery</span></li>
                                    <li><MdSecurity className="icon" /><span>Security</span></li>
                                    <li><MdHighQuality className="icon" /><span>Hight Quality</span></li>
                                </ul>
                            </div>
                            <div className="container-top-img"><img src={Coffe1} alt={Coffe1} /></div>
                        </div>
                        <div className="whyUs-text-container container-bottom">
                            <div className="container-bottom-img"><img src={Coffe2} alt={Coffe2} /></div>
                            <div className="container-bottom-text">
                                <h2>Lancashire fromage</h2>
                                <p>I love cheese, especially fromage feta. Queso caerphilly hard cheese
                                cheddar feta cauliflower cheese squirty cheese pecorino. Croque monsieur
                                queso stilton roquefort cheese and biscuits mascarpone cow parmesan.
                                Fromage cheese on toast mozzarella blue castello swiss the big cheese
                                swiss blue castello. Feta gouda.
                                Lancashire fromage frais goat. Taleggio the big cheese caerphilly blue
                                castello cheese and biscuits squirty cheese fromage cheese and biscuits.
                                Cheese on toast cheese and biscuits camembert de normandie bavarian
                                bergkase cheesecake danish fontina st. agur blue cheese paneer. Airedale
                                red leicester paneer airedale fromage frais rubber cheese parmesan
                                cheesy grin. Cheese slices st. agur blue cheese. Squirty cheese dolcelatte
                                edam. Squirty cheese cheesy grin gouda cheese triangles croque
                                monsieur cheese strings mozzarella goat. Paneer croque monsieur cheese
                                strings who moved my cheese stilton smelly cheese say cheese cheddar.</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className="parallax-layer2" offset={3.15} speed={1}>
                    <div className='parallax-layer2-imgdiv'>
                        <img className='parallax-layer2-imgdiv-img' src={CoffeTry} alt={CoffeTry} />
                    </div>
                    <div className='parallax-layer2-text'>
                        <h1 className='parallax-layer2-text-header'>Try our coffe!</h1>
                        <p className='parallax-layer2-text-desc'>I'm baby shaman mumblecore freegan stumptown lyft pitchfork, poutine
                        bitters neutra actually. Gentrify sustainable scenester man braid neutra,
                        wayfarers iPhone asymmetrical fanny pack tote bag lumbersexual raw
                        denim next level polaroid. Flannel master cleanse vinyl fam chillwave.
                        Chillwave sartorial helvetica kale chips retro activated charcoal. Yuccie
                        portland retro, trust fund locavore DIY ethical flannel normcore man braid
                        art party ramps meggings banjo gastropub. You probably haven't heard of
                        them jianbing af tousled 3 wolf moon coloring book. Thundercats
                        lumbersexual shoreditch, locavore subway tile taiyaki mlkshk air plant
                        hexagon VHS lo-fi cliche flexitarian.
                        +1 neutra forage truffaut, skateboard try-hard beard iPhone. Put a bird on
                        it deep v four loko, crucifix pug venmo green juice church-key celiac pabst
                        normcore gluten-free.</p>
                        <NavLink onClick={(e) => loadNewPage(e, "/products")} to="/products" className='parallax-layer2-text-button'><span>Our products <BsArrowRightShort className='parallax-layer1-text-button-arrow' /></span></NavLink>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0}>
                    <Map />
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={0}>
                    <Footer longest={'25rem'}/>
                </ParallaxLayer>
            </Parallax>
        </ParralaxScene>

        </>
    )
}

export default HomeDescParralax
