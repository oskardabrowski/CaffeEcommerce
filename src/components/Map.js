import React from 'react';
import styled from 'styled-components';

const MapArea = styled.div`
width: 100%;
height: auto;
background-color: black;
overflow: hidden;

& > iframe {
    width: 100%;
    height: 35rem;
}

& > h2 {
    color: white;
    margin-bottom: 3rem;
    margin-left: 1rem;
    font-family: 'Roboto Slab';
    font-size: 2rem;
    position: relative;
    width: 15rem;
    &:before {
        content: '';
        width: 12rem;
        height: .5rem;
        background-color: #622E00;
        position: absolute;
        bottom: -1rem;
        transform: skewX(-45deg);

    }
}
`;

const Map = () => {
    return (
        <MapArea>
            <h2>Here we are!</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3951.360218659929!2d18.590296037105865!3d53.00347769929591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1640002768187!5m2!1spl!2spl"></iframe>
        </MapArea>
    )
}

export default Map
