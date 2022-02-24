import React from 'react';
import styled from 'styled-components';
import AboutImage from '../../img/About-caffe.png';

const AbHead = styled.header`
width: 100%;
height: 60vh;
background-color: black;
position: relative;
padding-bottom: 5rem;
.AbHead-img {
    position: absolute;
    height: 60vh;
    top: 0;
    left: 0;
}

.AbHead-slogan {
    color: white;
    font-family: 'Roboto Slab';
    position: absolute;
    top: 40%;
    right: 15%;
    display: flex;
    flex-direction: column;
    &-top {
        font-size: 3rem;
    }
    &-bottom {
        font-size: 2rem;
        margin-left: 15rem;
    }
}
@media(max-width: 68.75em) { //1100
.AbHead-img {
    height: 50vh;
}
.AbHead-slogan {
    color: white;
    font-family: 'Roboto Slab';
    position: absolute;
    top: 40%;
    right: 15%;
    display: flex;
    flex-direction: column;
    &-top {
        font-size: 2rem;
    }
    &-bottom {
        font-size: 1rem;
        margin-left: 2rem;
    }
}
}
@media(max-width: 62.5em) { //1000

}
@media(max-width: 56.25em) { //900

}
@media(max-width: 50em) { //800
.AbHead-img {
    height: 25vh;
}
}
@media(max-width: 43.75em) { //700

}
@media(max-width: 37.5em) { //600

}
@media(max-width: 31.25em) { //500
.AbHead-img {
    height: 30vh;
}
.AbHead-slogan {
    right: 5%;
    &-top {
        font-size: 1.5rem;
    }
    &-bottom {
        font-size: 1rem;
        margin-left: 2rem;
    }
}
}
`;

const AboutHeader = () => {
    return (
        <AbHead>
            <img className="AbHead-img" src={AboutImage} alt={AboutImage} />
            <div className="AbHead-slogan">
                <h1 className="AbHead-slogan-top">More informations about Us</h1>
                <h1 className="AbHead-slogan-bottom">we are hope you're interested in</h1>
            </div>
        </AbHead>
    )
}

export default AboutHeader
