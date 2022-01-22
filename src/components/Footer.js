import React from 'react';
import styled from 'styled-components';
import {BsFacebook, BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import Wave from 'react-wavify';

const FooterContainer = styled.footer`
color: white;
font-family: 'Roboto slab';
.footer {
    &-bottom {
        background-color: #622E00;
        display: flex;
        justify-content: space-between;
        & > div {
            margin: 1rem;
        }
        &-left {
            display: flex;
            & > div {
                display: flex;
                flex-direction: column;
            }

            &-social {
                & > a {
                    color: white;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    margin: .25rem 0rem .25rem 0rem;
                    & > span {
                        margin-left: .5rem;
                    }
                }
            }

            &-contact {
                margin-left: 1rem;
            }
        }

    }
    &-top {
        background-color: black;
        height: 4rem;
    }
}
@media(max-width: 31.25em) {
    .footer {
        &-bottom {
            &-left {
                display: none;
            }
        }
    }
}

`;


const Footer = ({longest}) => {
    return (
        <FooterContainer>
            <div className="footer-top">
                <Wave fill='#622E00'
                      paused={false}
                      options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.25,
                        points: 3
                      }}
                />
            </div>
            <div className="footer-bottom" style={{ height: `${longest ? longest : ''}` }}>
                <div className="footer-bottom-left">
                    <div className="footer-bottom-left-social">
                        <a href="#"><BsFacebook /> <span>Facebook</span></a>
                        <a href="#"><BsTwitter /> <span>Twitter</span></a>
                        <a href="#"><AiFillInstagram /> <span>Instagram</span></a>
                    </div>
                    <div className="footer-bottom-left-contact">
                        <span>office@caffe.com</span>
                        <span>Tel: 123 123 123</span>
                        <span>Fax: 34 1234 1234</span>
                    </div>
                </div>
                <div className="footer-bottom-right">Copyright &copy; Caffe {new Date().getFullYear()}</div>
            </div>
        </FooterContainer>
    )
}

export default Footer
