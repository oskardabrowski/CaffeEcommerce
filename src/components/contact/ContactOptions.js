import React, {useState} from 'react';
import styled from 'styled-components';
import { useStripe } from '@stripe/react-stripe-js';

const ContactOptionsContainer = styled.div`
background-color: black;
display: flex;
color: white;
.ContactData {
    width: 50%;
    display: flex;
    flex-direction: column;
    & > div {
        margin: 0rem 0rem 1.5rem 1rem;
        display: flex;
        flex-direction: column;

        & > h2 {
            margin-bottom: 1.5rem;
            font-family: 'Roboto Slab';
            font-size: 2rem;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                height: .5rem;
                background-color: #622E00;
                transform: skewX(-45deg);
                bottom: -.5rem;
            }
        }

        & > span {
            font-size: 1.2rem;
            font-family: 'Rubik';
            margin: .5rem;
        }
    }
}

.ContactForm {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > h2 {
        font-family: 'Roboto Slab';
        margin-bottom: 1.5rem;
        font-size: 2rem;
        position: relative;
        width: max-content;
        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: .5rem;
            background-color: #622E00;
            bottom: -.5rem;
            transform: skewX(-45deg);
        }
    }

    &>form {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-right: 1.2rem;

        &>label {
            margin-top: 1rem;
            font-size: 1.2rem;
            font-family: 'Rubik';
        }

        & > input {
            border: none;
            border-radius: 15px;
            padding: .5rem;
            background: #622E00;
            font-size: 1.2rem;

            &::placeholder {
                color: rgba(255,255,255,.25);
            }
        }

        & > textarea {
            height: 8rem;
            border: none;
            border-radius: 15px;
            padding: .5rem;
            background: #622E00;
            font-size: 1.2rem;

            &::placeholder {
                color: rgba(255,255,255,.25);
            }
        }

        & > button {
            margin-top: 1rem;
            padding: .5rem;
            width: 7.5rem;
            align-self: center;
            border-radius: 15px;
            border: none;
            background: #492200;
            font-size: 1.2rem;
            color: white;
            transition: all .5s ease-in-out;

            &:hover {
                cursor: pointer;
                color: #492200;
                background: black;
            }
        }
    }

}

.Telephone {
    &:before {
        width: 10rem;
    }
}

.Email {
    &:before {
        width: 6rem;
    }
}

.Address {
    &:before {
        width: 7.5rem;
    }
}
@media(max-width: 68.75em) {
flex-direction: column;
width: 100%;
.ContactForm {
    width: 100%;

    &>form {
        margin-right: 0rem;
    }
}
.ContactData {
    width: 100%;
}
}
`;



const ContactOptions = () => {
    const inputs = document.querySelectorAll('.InputContact');
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState('SEND');
    const SendMail = (e) => {
        e.preventDefault();
        const name = document.querySelector(".NameInput");
        const email = document.querySelector(".NameEmail");
        const tel = document.querySelector(".NameTel");
        const message = document.querySelector(".NameMessage");

        const object = {name: name.value, email: email.value, tel: tel.value, message: message.value}
        setMessage('SENDING');
        fetch("/mail-contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(object),
        }).then((res) => setMessage("DONE!"))
        setTimeout(() => {
            inputs.forEach((el) => {
                el.value='';
            });
            setTimeout(() => {
                setMessage('SEND');
            }, 3000)
        }, 1000)
    }
    return (
        <ContactOptionsContainer>
            <div className="ContactData">
                <div>
                    <h2 className="Telephone">Telephone</h2>
                    <span>+00 000 000 000</span>
                    <span>+00 000 000 000</span>
                </div>
                <div>
                    <h2 className="Email">Email</h2>
                    <span>office@caffe.pl</span>
                    <span>something@caffe.pl</span>
                </div>
                <div>
                    <h2 className="Address">Address</h2>
                    <span>00-000</span>
                    <span>Somewhere</span>
                    <span>Example Street 1</span>
                    <span>Poland</span>
                </div>
            </div>
            <div className="ContactForm">
                <h2>Contact Form</h2>
                <form>
                    <label>Name:</label>
                    <input className="InputContact NameInput" name='name' type="text" placeholder="John Kowalski" />
                    <label>Email:</label>
                    <input className="InputContact NameEmail" name='email' type="email" placeholder='example@email.pl'/>
                    <label>Telephone (optional):</label>
                    <input className="InputContact NameTel" name='tel' type="tel" placeholder="000 000 000"/>
                    <label>Message:</label>
                    <textarea className="InputContact NameMessage" name='message' placeholder='Type your message here...'></textarea>
                    <button onClick={(e) => SendMail(e)}>{message}</button>
                </form>
            </div>
        </ContactOptionsContainer>
    )
}

export default ContactOptions
