import React, {useEffect} from 'react';
import HomeDescParralax from '../components/home/HomeParralax';
import { useGlobalContext } from '../components/globalContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {isNewPageLoading, isMenuOpen,setIsMenuOpen, setIsNewPageLoading} = useGlobalContext();
    const navigateTo = useNavigate();
    const loadNewPage = (e, path) => {
        e.preventDefault();
        const menu = document.querySelector('.nav-menu');
        setIsNewPageLoading(!isNewPageLoading);
        setIsMenuOpen(!isMenuOpen)
        setTimeout(() => {
            navigateTo(path);
        }, 2000)
    }
    useEffect(() => {
        setIsNewPageLoading(false)
    }, [])
    return (
        <>
            <HomeDescParralax />
        </>
    )
}

export default Home
