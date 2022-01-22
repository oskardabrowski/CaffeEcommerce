import React, {useState, useEffect, useRef} from 'react';
import {AiOutlineClose, AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineCheckCircle, AiFillDelete} from 'react-icons/ai';
import {IoMdArrowDropupCircle, IoMdArrowDropdownCircle} from 'react-icons/io';
import {BsCartFill} from 'react-icons/bs';
import styled from 'styled-components';
import { useGlobalContext } from './globalContext';
import {products} from '../components/products/products-data';
import TraditionalMethod from './paymentMethods/TraditionalMethod';
import Stripe from './paymentMethods/StripeCardMethod';

const CartContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 8000;
display: flex;
justify-content: center;
align-items: center;
.container {
    width: 30rem;
    height: 40rem;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;

    &-close {
        height: auto;
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        margin: .25rem;

        & > span {
            font-family: 'Roboto Slab';
            font-size: 1.5rem;
        }

        &-ico {
            &:hover {
                cursor: pointer;
            }
        }
    }

    &-steps {
        display: flex;
        padding-left: .5rem;
        & > .stepHalfColor {
            width: 5rem;
            height: 2rem;
            clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Rubik';
            font-size: .9rem;
            background-color: rgba(98,56,0,.5);
        }
    }

    &-windows {
        height: 80%;
        position: relative;
        overflow: hidden;

        & > div {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        &-items {
            top: 0;
            left: 0%;
            z-index: 100;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            transition: all .5s ease-in-out;
            position: fixed;
            ::-webkit-scrollbar-track {
                background-color: rgba(98,56,0,.5);
            }
            ::-webkit-scrollbar-thumb {
                background-color: rgba(98,56,0,1);
            }

            &-empty {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-family: 'Roboto Slab';
                &-cartIco {
                    width: 2rem;
                    height: 2rem;
                }
            }

            &-item {
                height: auto;
                margin: .5rem;
                display: flex;
                justify-content: space-between;

                & > img {
                    height: 7.5rem;
                    border-radius: 10px;
                }

                &-info {
                    & > h2 {
                        font-family: 'Roboto Slab';
                        margin-bottom: .5rem;
                    }

                    font-family: 'Rubik';
                    & > button {
                        margin-top:.5rem;
                        font-size: 1rem;
                        display: flex;
                        align-items: center;
                        color: red;
                        background: none;
                        border: none;
                        &:hover {
                            cursor: pointer;
                        }

                        & > .deleteIcon {
                            margin-right: .25rem;
                        }
                    }
                }

                &-count {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 2rem;
                    font-family: 'Rubik';
                    width: 3rem;

                    & > button {
                        background: none;
                        border: none;
                        font-size: 1.2rem;
                        transition: all .5s ease-in-out;

                        &:hover {
                            cursor: pointer;
                            color: rgba(98,56,0,1);
                        }
                    }
                }
            }
        }
        &-address {
            top: 0;
            left: 100%;
            z-index: 200;
            transition: all .5s ease-in-out;
            display: flex;
            & > div {
                width: 50%;
                margin: .5rem;
                font-family: 'Rubik';
                & > form.clientData {
                    display: flex;
                    flex-direction: column;
                }
                & > h2 {
                    font-family: 'Roboto Slab';
                }
            }
        }
        &-payment {
            top: 0;
            left: 100%;
            z-index: 300;
            transition: all .5s ease-in-out;

            &-form {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 1rem;
                flex-direction: column;
                font-family: 'Roboto Slab';

                & > label {
                    margin-bottom: .5rem;
                }

                & > select {
                    width: 90%;
                    padding: .5rem;
                    font-family: 'Rubik';
                    border-radius: 25px;
                }
            }

            &-method {
                height: 80%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem 0rem;

                & > div {
                    & > h2 {
                        font-family: 'Roboto Slab';
                    }
                    & > div {
                        font-family: 'Rubik';
                    }
                }
            }
        }
        &-info {
            top: 0;
            left: 100%;
            z-index: 400;
            transition: all .5s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-family: 'Roboto Slab';

            & > div {
                &:nth-child(1) {
                    font-size: 4rem;
                }
                &:nth-child(2) {
                    font-size: 2rem;
                }
                &:nth-child(3) {
                    font-size: 1rem;
                }
            }
        }
    }

    &-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: .5rem;

        & > div {
            display: flex;
            & > span {
                font-family: 'Roboto Slab';
                display: flex;
            }
            & > button {
                padding: .5rem;
                display: flex;
                align-items: center;
                border: none;
                border-radius: 0;
                background-color: rgba(98,56,0,.5);
                transition: all .5s ease-in-out;

                &:hover {
                    cursor: pointer;
                    background-color: rgba(98,56,0,1);
                    color: white;
                }
            }
        }
    }

}

.fullColor {
    background-color: rgba(98,56,0,1);
    width: 5rem;
    height: 2rem;
    clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Rubik';
    font-size: .9rem;
    color: white;
}
@media(max-width: 37.5em) { //600
.container {
    width: 100%;
    height: 100%;
}
.container-windows-address {
    overflow-y: scroll;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: 1rem 0rem; */
    & > div {
        width: 90%;
        margin: .5rem;
        height: 30rem;
        font-family: 'Rubik';
        & > form.clientData {
            display: flex;
            flex-direction: column;
        }
        & > h2 {
            font-family: 'Roboto Slab';
            margin-top: 6rem;
        }
    }
}

.container-windows-items-item {
    flex-direction: column;
    height: auto;
    margin: .5rem;
    display: flex;
    justify-content: space-between;
    & > img {
        height: 12rem;
        border-radius: 10px;
    }
    &-info {
        display: flex;
        justify-content: space-between;
    }
    &-count {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        & > button {
            transform: rotate(90deg);
            &:hover {
                cursor: pointer;
                color: rgba(98,56,0,1);
            }
        }
    }
}
}
`;

const Cart = () => {
    let [step, setStep] = useState(1);
    const {setIsCartOpen,dispatch} = useGlobalContext();

    let [ClientData, setClientData] = useState({});
    let [PaymentVisibleMethod, setPaymentVisibleMethod] = useState("Traditional");
    let [TraditionalPaymentNumber, setTraditionalPaymentNumber] = useState();

    const countrySelection = document.querySelector('#countrySelection');
    const nameAndSurname = document.querySelector('#nameAndSurname');
    const clientEmail = document.querySelector('#clientEmail');
    const clientTelephone = document.querySelector('#clientTelephone');
    const clientCity = document.querySelector('#clientCity');
    const clientCityPostcode = document.querySelector('#clientCityPostcode');
    const clientCityStreet = document.querySelector('#clientCityStreet');
    const clientCityHome = document.querySelector('#clientCityHome');
    const clientHomeFlat = document.querySelector('#clientHomeFlat');
    const clientMessage = document.querySelector('#clientMessage');
    const DeliveryMethod = document.querySelector('#DeliveryMethod');
    const paymentMethodCheck = document.querySelector('.paymentMethodCheck');
    const paymentMethod = document.querySelector(".paymentMethod");


    const PaymentCheckHandler = () => {
        const method = paymentMethodCheck.value;
        if(method === "Traditional Bank Transfer") {
            setPaymentVisibleMethod("Traditional");
        } else if (method === "Stripe payments") {
            setPaymentVisibleMethod("Stripe");
        } else {
            setPaymentVisibleMethod("Traditional");
        }
    }

    const cartItems = JSON.parse(localStorage.getItem('CaffeCart'));
    const stepHandler = (action) => {
        try {
            if (action == 'increment' && step < 4) {
                if(step == 1 && cartItems.length > 0) {
                    if (cartItems.length > 0) {
                        setStep(step += 1);
                    } else {
                        alert("You can't continue with empty cart!")
                    }
                } else if (step == 2) {
                    if(countrySelection.vlaue !== '' && nameAndSurname.value !== '' && clientEmail.value !== '' && clientCity.value !== '' && clientCityPostcode.value !== ''
                        && clientCityStreet.value !== '' && clientCityHome.value !== '') {
                        const order = JSON.parse(localStorage.getItem('CaffeCart'))
                        const DeliveryMethodChecked = DeliveryMethod.querySelector('input[type="radio"]:checked');
                        const DeliveryArr = DeliveryMethodChecked.value.split(' ');
                        const newCost = parseInt(TotalCost) + parseInt(DeliveryArr[1]);
                        document.querySelector(`.CoffeTotalCost`).textContent = newCost.toFixed(2);
                        const date = new Date().getTime().toString();
                        const country = countrySelection.value[0].toUpperCase();
                        const name = nameAndSurname.value[0].toUpperCase();
                        const city = clientCity.value[0].toUpperCase();
                        const PayNumber = country + name + city + date;
                        setTraditionalPaymentNumber(PayNumber);
                        setClientData({countrySelection: countrySelection.value, nameAndSurname: nameAndSurname.value, clientEmail: clientEmail.value, clientTelephone: clientTelephone.value
                        , clientCity: clientCity.value, clientCityPostcode: clientCityPostcode.value, clientCityStreet: clientCityStreet.value, clientCityHome: clientCityHome.value,
                        clientHomeFlat: clientHomeFlat.value, clientMessage: clientMessage.value, Order: order, DeliveryMethod: DeliveryArr[0], DeliveryCost: DeliveryArr[1], 
                        TraditionalPaymentNumber: PayNumber, TotalCost: newCost.toFixed(2)});
                        setStep(step += 1);
                        PaymentCheckHandler();
                    } else {
                        alert("Some required fields are empty!")
                    }
                } else if (step == 3) {
                    setStep(step += 1);
                    localStorage.setItem('CaffeCart', JSON.stringify([]));
                    dispatch({type: 'SetData', newData: []})
                }
            } else if (action == 'decrement' && step > 1) {
                setStep(step -= 1);
            } else {
                setStep(step)
            }
        } catch(e) {
            alert("Something went wrong, please try agin later")
        }
    }
    useEffect(() => {
        const items = document.querySelector('.container-windows-items');
        const address = document.querySelector('.container-windows-address');
        const payment = document.querySelector('.container-windows-payment');
        const info = document.querySelector('.container-windows-info');
        if(step == 1) {
            items.style.left = '0%';
            address.style.left = '100%';
            payment.style.left = '100%';
            info.style.left = '100%';
        } else if (step == 2) {
            items.style.left = '-100%';
            address.style.left = '0%';
            payment.style.left = '100%';
            info.style.left = '100%';
        } else if (step == 3) {
            items.style.left = '-100%';
            address.style.left = '-100%';
            payment.style.left = '0%';
            info.style.left = '100%';
        } else if (step == 4) {
            items.style.left = '-100%';
            address.style.left = '-100%';
            payment.style.left = '-100%';
            info.style.left = '0%';
        }
    }, [step]);


    let TotalCost = 0;
    const CoffeCartHandler = (type, id, cost) => {
        const CoffeCount = document.querySelector(`.CoffeCount-${id}`);
        const CoffeCost = document.querySelector(`.CoffeCost-${id}`);
        const CoffeTotalCost = document.querySelector(`.CoffeTotalCost`);
        let number = parseInt(CoffeCount.innerText);
        let totalCost = parseInt(CoffeTotalCost.innerText);
        if(type === 'ADD') {
            dispatch({type: 'ADD', itemId: id});
            number++;
            totalCost += cost;
        } else if (type === 'DEL') {
            dispatch({type: 'DEL', itemId: id});
            number--;
            totalCost -= cost;
            if(number === 0) {
                number = 1;
            }
        } else if (type === 'REMOVE') {
            dispatch({type: 'REMOVE', itemId: id});
            number--;
            totalCost -= (cost * number);
            if(number === 0) {
                number = 1;
            }
        }
        const CostCoffe = number * cost;
        CoffeCount.textContent = number;
        CoffeCost.textContent = CostCoffe.toFixed(2);
        CoffeTotalCost.textContent = totalCost.toFixed(2);
    }

    return (
        <CartContainer>
            <div className="container">
                <div className="container-close"><span>CART</span><AiOutlineClose onClick={() => setIsCartOpen(false)} className="container-close-ico" /></div>
                <div className="container-steps">
                    <div className={`${step >= 1 ? 'fullColor' : 'stepHalfColor'}`}>Step 1</div>
                    <div className={`${step >= 2 ? 'fullColor' : 'stepHalfColor'}`}>Step 2</div>
                    <div className={`${step >= 3 ? 'fullColor' : 'stepHalfColor'}`}>Step 3</div>
                    <div className={`${step >= 4 ? 'fullColor' : 'stepHalfColor'}`}>Finish</div>
                </div>
                <div className="container-windows">
                    <div className="container-windows-items">
                        {cartItems && cartItems.length > 0 ? cartItems.map((el, index) => {
                            try {
                                const thisProduct = products.filter((item) => {if(item.id === el.id) {return el}});
                                const {id, Name, CostNum, Photo} = thisProduct[0];
                                const totalThisCoffe = CostNum * el.count;
                                TotalCost += totalThisCoffe;
                                return <div key={index} className="container-windows-items-item">
                                    <img src={Photo} alt={Photo} />
                                    <div className="container-windows-items-item-info">
                                        <div>
                                            <h2>{Name}</h2>
                                            <p>Cost per coffe: <span className={`OneCoffeCost`}>{CostNum}</span> zł</p>
                                            <p>Cost: <span className={`CoffeCost-${id}`}>{totalThisCoffe.toFixed(2)}</span> zł</p>
                                        </div>
                                        <button onClick={() => CoffeCartHandler('REMOVE', id, CostNum)}><AiFillDelete className="deleteIcon" /><span>Delete</span></button>
                                    </div>
                                    <div className="container-windows-items-item-count">
                                        <button onClick={() => CoffeCartHandler('ADD',id, CostNum)}><IoMdArrowDropupCircle /></button>
                                        <span className={`CoffeCount-${id}`}>{el.count}</span>
                                        <button onClick={() => CoffeCartHandler('DEL', id, CostNum)} ><IoMdArrowDropdownCircle/></button>
                                    </div>
                                </div>
                            } catch(e) {
                                alert("Something went wrong: " + e.message);
                            }
                        }) : <div className="container-windows-items-empty">
                                <BsCartFill className="container-windows-items-empty-cartIco" />
                                <span>Your cart is empty</span>
                            </div>}
                    </div>
                    <div className="container-windows-address">
                        <div>
                            <h2>Delivery Address</h2>
                            <form className="clientData">
                                <label htmlFor="countrySelection">Country: </label>
                                <select id="countrySelection">
                                    <option>Poland</option>
                                    <option>Ukraine</option>
                                    <option>Germany</option>
                                    <option>Slovakia</option>
                                    <option>Czech Republic</option>
                                    <option>Lithuania</option>
                                </select>
                                <label htmlFor="nameAndSurname">Name and Surname: </label>
                                <input id="nameAndSurname" type="text" ref={nameAndSurname} />
                                <label htmlFor="clientEmail">Email: </label>
                                <input id="clientEmail" type="email" />
                                <label htmlFor="clientTelephone">Telephone (optional): </label>
                                <input id="clientTelephone" type="tel" />
                                <label htmlFor="clientCity">City/town: </label>
                                <input id="clientCity" type="text" />
                                <label htmlFor="clientCityPostcode">Postcode: </label>
                                <input id="clientCityPostcode" type="postcode" />
                                <label htmlFor="clientCityStreet">Street: </label>
                                <input id="clientCityStreet" type="text" />
                                <label htmlFor="clientCityHome">House: </label>
                                <input id="clientCityHome" type="text" />
                                <label htmlFor="clientHomeFlat">Flat (optional):</label>
                                <input id="clientHomeFlat" type="text" />
                                <label htmlFor="clientMessage">Message (optional):</label>
                                <textarea id="clientMessage" rows={5}></textarea>
                            </form>
                        </div>
                        <div>
                            <h2>Delivery Method</h2>
                            <form id="DeliveryMethod" action="">
                                <input type="radio" name="delivery" value="DPDDeliveryMan 15" checked />DPD Delivery man 15 zł<br />
                                <input type="radio" name="delivery" value="InPostDeliveryMan 12" />InPost Delivery man 12 zł<br />
                                <input type="radio" name="delivery" value="InPostParcelLocker 5" />InPost parcel locker 5 zł<br />
                                <input type="radio" name="delivery" value="PostOffice 8"/>Post Office 8 zł
                            </form>
                        </div>
                    </div>
                    <div className="container-windows-payment">
                        <form className="container-windows-payment-form">
                            <label htmlFor="PaymentMethodCheck">Select Payment Method: </label>
                            <select id="PaymentMethodCheck" className="paymentMethodCheck" onChange={() => PaymentCheckHandler()}>
                                <option>Traditional Bank Transfer</option>
                                <option>Stripe payments</option>
                            </select>
                        </form>
                        <div className="paymentMethod container-windows-payment-method">
                            {step === 3 && PaymentVisibleMethod == 'Traditional' ? <TraditionalMethod payNum={TraditionalPaymentNumber}/> : ''}
                            {step === 3 && PaymentVisibleMethod == 'Stripe' ? <Stripe clientData={ClientData} payNum={"Stripe"}/> : ''}
                        </div>
                    </div>
                    <div className="container-windows-info">
                        <div><AiOutlineCheckCircle /></div>
                        <div>Order Complete!</div>
                        <div>We will start realize your order after receive payment</div>
                    </div>
                </div>
                <div className="container-options">
                    <div><span><p>Total Cost:&nbsp;</p><p className="CoffeTotalCost">{TotalCost.toFixed(2)}</p>&nbsp;zł</span></div>
                    <div>
                        {step > 1 && step < 4 ? <button onClick={() => stepHandler('decrement')}><AiOutlineArrowLeft />Prev</button> : ''}
                        {step > 2 && PaymentVisibleMethod != "Traditional" || step == 4 ? '' : <button onClick={() => stepHandler('increment')}><span>Next</span><AiOutlineArrowRight /></button>}
                    </div>
                </div>
            </div>
        </CartContainer>
    )
}


export default Cart
