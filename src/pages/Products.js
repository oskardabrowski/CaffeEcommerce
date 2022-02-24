import React, {useEffect} from 'react';
import ProductsHeader from '../components/products/ProductsHeader';
import { useGlobalContext } from '../components/globalContext';
import ProductsOffer from '../components/products/ProductsOffer';
import Footer from '../components/Footer';

const Products = () => {
    const {setIsNewPageLoading} = useGlobalContext();
    useEffect(() => {
        setIsNewPageLoading(false)
    }, [])
    return (
        <>
            <ProductsHeader />
            <ProductsOffer />
            <Footer />
        </>
    )
}

export default Products
