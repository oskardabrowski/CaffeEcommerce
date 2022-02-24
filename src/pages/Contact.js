import React, {useEffect} from 'react';
import ContactHeader from '../components/contact/ContactHeader';
import { useGlobalContext } from '../components/globalContext';
import Map from '../components/Map';
import Footer from '../components/Footer';
import ContactOptions from '../components/contact/ContactOptions';

const Contact = () => {
    const {isNewPageLoading, setIsNewPageLoading} = useGlobalContext();
    useEffect(() => {
        setIsNewPageLoading(false)
    }, [])
    return (
        <>
            <ContactHeader />
            <ContactOptions />
            <Map/>
            <Footer />
        </>
    )
}

export default Contact
