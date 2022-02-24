import React, {useRef} from 'react';
import styled from 'styled-components';
import CookieImg from '../img/cookie.svg';




const CookieBar = () => {

    const cookieBar = useRef();

    const CookieAcceptHandler = () => {
        cookieBar.current.style.bottom = "-20rem";
    }

  return (
    <CookieComponent ref={cookieBar}>
        <div className="CookieMessage">
            <img src={CookieImg} alt={CookieImg} />
            <p>We are using cookies for the website to work properly</p>
        </div>
        <div className="CookieButton">
            <button onClick={() => CookieAcceptHandler()}>Accept</button>
        </div>
    </CookieComponent>
  )
}

export default CookieBar


const CookieComponent = styled.div`
width: 100%;
position: fixed;
bottom: 0;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1000;
transition: all .5s ease-in-out;
.CookieMessage {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-family: 'Rubik';
    & > img {
        width: 2.5rem;
        margin: .75rem;
    }
}

.CookieButton {
    height: 100%;
    display: flex;
    align-items: center;
    & > button {
        margin-right: 1rem;
        padding: .5rem;
        border: none;
        min-width: 7.5rem;
        border-radius: 25px;
        background-color: #B65500;
        font-family: 'Rubik';
        transition: all .5s ease-in-out;

        &:hover {
            background-color: #622E00;
            cursor: pointer;
        }
    }
}

@media(max-width: 50em) { //800
flex-direction: column;
.CookieButton {
    margin-bottom: 1rem;
}
}


`;


