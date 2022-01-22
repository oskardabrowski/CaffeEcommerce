import React from 'react';
import styled from 'styled-components';

import About1 from '../../img/about/about1.png';
import About2 from '../../img/about/about2.png';
import About3 from '../../img/about/about3.png';


const AboutContainer = styled.article`
background-color: black;
color: white;

.container {
    display: flex;
    margin: 0rem 1rem;
    padding: 1rem 0rem;

    & > .text {
        margin: 0rem 1rem;

        & > h2 {
            margin-bottom: 2rem;
            font-family: 'Roboto Slab';
            position: relative;
            width: max-content;
            &:before {
                position: absolute;
                content: '';
                height: .5rem;
                width: 100%;
                background-color: #622E00;
                bottom: -.5rem;
                left: -.5rem;
                transform: skewX(-45deg)
            }
        }

        &>p {
            font-family: 'Rubik';
            font-size: 1.2rem;
        }
    }
}


@media(max-width: 68.75em) { //1100
.container {
    flex-direction: column;
    align-items: center;

    & > .text {
        margin: 0rem 1rem;

        & > h2 {
            margin-bottom: 2rem;
            font-family: 'Roboto Slab';
            position: relative;
            width: max-content;
            &:before {
                position: absolute;
                content: '';
                height: .5rem;
                width: 100%;
                background-color: #622E00;
                bottom: -.5rem;
                left: -.5rem;
                transform: skewX(-45deg)
            }
        }

        &>p {
            font-family: 'Rubik';
            font-size: 1.2rem;
        }
    }
}
.container-reverse {
    flex-direction: column-reverse;
}
}
@media(max-width: 43.75em) { //700
.container {
    & > .text {
        & > h2 {
            font-size: 1.25rem;
        }
        &>p {
            font-family: 'Rubik';
            font-size: 1rem;
        }
    }
}
}
`;

const AboutInfo = () => {
    return (
        <AboutContainer>
            <div className="container">
                <div>
                    <img src={About1} alt={About1} />
                </div>
                <div className="text">
                    <h2 className="first-header">We start as small caffe</h2>
                    <p>Cupcake ipsum dolor sit amet shortbread croissant. Ice cream candy canes bear
                    claw chocolate bar gingerbread icing cake jelly-o. Powder lollipop donut chocolate
                    cake apple pie. Icing cupcake cupcake topping chupa chups I love croissant.
                    Lollipop cake powder jelly beans oat cake fruitcake wafer. Tart shortbread halvah
                    liquorice liquorice bonbon topping gingerbread gingerbread. Candy canes brownie
                    cupcake lollipop I love wafer bonbon. Cupcake soufflé powder I love cookie ice
                    cream chocolate bar. Chupa chups icing jelly-o gummi bears bear claw apple pie
                    pie muffin I love.</p>
                </div>
            </div>
            <div className="container container-reverse">
                <div className="text">
                    <h2 className="second-header">Next we improve our products</h2>
                    <p>I'm baby tumeric unicorn vape mixtape reprehenderit master cleanse. Crucifix chia
                    dolor la croix do. Wayfarers swag mixtape commodo prism est in in plaid jianbing
                    ad lyft adipisicing quinoa. Shoreditch dolor yuccie, chia tousled dreamcatcher
                    aliqua chartreuse commodo. Subway tile kombucha tilde dolore tumeric roof party
                    portland leggings sint 8-bit XOXO. Adipisicing sartorial proident, plaid 8-bit
                    pinterest dreamcatcher. IPhone aesthetic semiotics vexillologist ullamco tbh
                    heirloom ramps.</p>
                </div>
                <div>
                    <img src={About2} alt={About2} />
                </div>
            </div>
            <div className="container">
                <div>
                    <img src={About3} alt={About3} />
                </div>
                <div className="text">
                    <h2 className="third-header">Today!</h2>
                    <p>Cat ipsum dolor sit amet, bite off human's toes. If human is on laptop sit on the
                    keyboard russian blue eat from dog's food for cat milk copy park pee walk owner
                    escape bored tired cage droppings sick vet vomit need to check on human, have
                    not seen in an hour might be dead oh look, human is alive, hiss at human, feed me
                    but cat not kitten around cat fur is the new black . Ptracy if it fits i sits. Jump five
                    feet high and sideways when a shadow moves. Purr while eating haha you hold
                    me hooman i scratch stretch out on bed for head nudges or jump on counter
                    removed by human jump on counter again removed by human meow before
                    jumping on counter this time to let the human know am coming back lick human
                    with sandpaper tongue.</p>
                </div>
            </div>
        </AboutContainer>
    )
}

export default AboutInfo
