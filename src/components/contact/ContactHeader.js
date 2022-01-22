import React from 'react';
import styled from 'styled-components';
import ContactCaffe from '../../img/contact-caffe.png';

const CHeader = styled.header`
width: 100%;
height: 100vh;
background-color: black;
position: relative;
.CHeader-img {
    height: 90vh;
    position: absolute;
    left: -5%;
}

.CHeader-slogan {
    position: absolute;
    color: white;
    top: 40%;
    right: 15%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Slab';

    &-top {
        font-size: 4rem;
    }

    &-bottom {
        font-size: 2rem;
        margin-left: 4rem;
    }
}
@media(max-width: 68.75em) { //1100

}
@media(max-width: 62.5em) { //1000

}
@media(max-width: 56.25em) { //900
.CHeader-slogan {
    right: 15%;
    display: flex;

    &-top {
        font-size: 2rem;
    }

    &-bottom {
        font-size: 1rem;
        margin-left: 4rem;
    }
}
}
@media(max-width: 50em) { //800

}
@media(max-width: 43.75em) { //700

}
@media(max-width: 37.5em) { //600
.CHeader-img {
    height: 50vh;
    position: absolute;
    left: -5%;
}
}
@media(max-width: 31.25em) { //500
.CHeader-img {
    height: 25vh;
    position: absolute;
    left: -5%;
}
}
`;


const ContactHeader = () => {
    return (
        <CHeader>
            <img className="CHeader-img" src={ContactCaffe} alt={ContactCaffe} />
            <div className="CHeader-slogan">
                <span className="CHeader-slogan-top">Contact Us</span>
                <span className="CHeader-slogan-bottom">or just use contact form!</span>
            </div>
        </CHeader>
    )
}

export default ContactHeader
