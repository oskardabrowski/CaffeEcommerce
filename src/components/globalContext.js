import React, { useContext, useState, useReducer, useEffect } from 'react';

const GlobalContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "SetData": return action.newData; break;
        case "ADD":
            if(state.length === 0) {
                const newState = [{id: action.itemId, count: 1}];
                localStorage.setItem("CaffeCart", JSON.stringify(newState));
                return newState;
            } else {
                let newState = state;
                const exists = newState.filter((el) => {
                    if(el.id === action.itemId) {
                        return el;
                    }
                })
                if(exists[0]) {
                    newState.map((el) => {
                        if(el.id === action.itemId) {
                            el.count += 1;
                        }
                    })
                    localStorage.setItem("CaffeCart", JSON.stringify(newState));
                    return newState;
                } else {
                    newState.push({id: action.itemId, count: 1});
                    localStorage.setItem("CaffeCart", JSON.stringify(newState));
                    return newState;
                }
            }
        ; break;
        case "DEL":
            const thisElement = state.filter((el) => {
                if(el.id === action.itemId) {
                    return el;
                }
            })
            if(thisElement[0]) {
                if (thisElement[0].count > 1) {
                    let newState = state;
                    newState.map((el) => {
                        if (el.id === action.itemId) {
                            el.count -= 1;
                        }
                    })
                    localStorage.setItem("CaffeCart", JSON.stringify(newState));
                    return newState;
                } else {
                    const filterData = state.filter((el) => {
                        if(el.id !== action.itemId) {
                            return el;
                        }
                    })
                    localStorage.setItem("CaffeCart", JSON.stringify(filterData));
                    return filterData;
                }
            }
        ; break;
        case "REMOVE":
            const filteredCart = state.filter((el) => {
                if(el.id !== action.itemId) {return el}
            });
            localStorage.setItem("CaffeCart", JSON.stringify(filteredCart));
            return filteredCart;
        ; break;
    }
}

const GlobalProvider = ({children}) => {
    const [isNewPageLoading, setIsNewPageLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    let cartState = [];
    useEffect(() => {
        if(localStorage.getItem('CaffeCart')) {
            const newData = JSON.parse(localStorage.getItem('CaffeCart'));
            dispatch({type: 'SetData', newData: newData});
        } else {
            dispatch({type: 'SetData', newData: []});
        }
    }, []);

    let [cartItems, dispatch] = useReducer(reducer, cartState);

    return (
        <GlobalContext.Provider
        value = {{
            isNewPageLoading,
            setIsNewPageLoading,
            isMenuOpen,
            setIsMenuOpen,
            isCartOpen,
            setIsCartOpen,
            dispatch,
            cartItems
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export {GlobalProvider, GlobalContext}
