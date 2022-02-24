import React, {useEffect} from 'react';
import AboutHeader from '../components/about/AboutHeader';
import { useGlobalContext } from '../components/globalContext';
import Footer from '../components/Footer';
import AboutInfo from '../components/about/AboutInfo';
const About = () => {
    const {setIsNewPageLoading} = useGlobalContext();
    useEffect(() => {
        setIsNewPageLoading(false)
    }, [])
    return (
        <>
            <AboutHeader />
            <AboutInfo />
            <Footer />
        </>
    )
}

export default About
