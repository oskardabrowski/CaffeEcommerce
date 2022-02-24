import React, {useRef} from 'react';
import styled from 'styled-components';
import {AiOutlineClose} from 'react-icons/ai';

const PageInfo = () => {
  const window = useRef();

  const modalHandler =() => {
      window.current.style.display = "none"
  }
  return (
    <InfoWindow ref={window}>
        <div className="modal">
            <div className="modal-close">
                <AiOutlineClose class="ico" onClick={() => modalHandler()} />
            </div>
            <div className="modal-header">
                <h1>This isn't real e-commerce website</h1>
            </div>
            <div className="modal-description">
                <p>This is website created while learning React, please do not use your real personal data.</p>
                <p>No order from this site will be processed</p>
                <p>The purpose of the website was to learn how to use new libraries and develop the author's skills.</p>
            </div>
        </div>
    </InfoWindow>
  )
}

export default PageInfo

const InfoWindow = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 10000;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
.modal {
    width: 60%;
    height: 60%;
    background-color: white;

    &-close {
        width: 100%;
        display: flex;
        justify-content: end;

        & > .ico {
            margin: 1rem;
            font-size: 2rem;
            &:hover {
                cursor: pointer;
            }
        }
    }
    &-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Roboto Slab";
        margin-bottom: 2rem;
    }
    &-description {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > p {
            margin: 1rem 0rem;
            font-family: 'Rubik';
            font-size: 1.25rem;
        }
    }
}


background-color: rgba(0,0,0,.5);


@media(max-width: 62.5em) { //1000
.modal {
    width: 100%;
    height: 100%;
    text-align: center;
}
}
`;