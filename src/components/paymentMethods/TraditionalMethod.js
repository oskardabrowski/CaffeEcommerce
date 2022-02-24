import React from 'react';
import styled from 'styled-components';

const TraditionalBank = styled.div`
@media(max-width: 37.5em) { //600
width: 90%;
}
`;

const TraditionalMethod = ({payNum}) => {
    return <TraditionalBank className="container-windows-payment-method-traditional">
                <h2>Please make transfer using this data:</h2>
                <div>Recipient: Caffe sp. z.o.o</div>
                <div>IBAN number: PL 12 1234 1234 1234 1234 1234 1234</div>
                <div>Title: {payNum}</div>
            </TraditionalBank>
}

export default TraditionalMethod