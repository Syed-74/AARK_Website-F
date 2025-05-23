import React from 'react';
import { Element } from 'react-scroll';
import Home from './Home';
import About from './About'; 
import OurTeam from './OurTeam';
import Gallery from './GalleryView';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';




const Content = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (section) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section } });
        } else {
            scroller.scrollTo(section, {
                smooth: true,
                duration: 500,
                offset: -70,
            });
        }
    };

    return (
        <>

            <Element name="home">
                <Home />
            </Element>

            <Element name="about">
                <About />
            </Element>

            <Element name="gallery">
                <Gallery />
            </Element>

            <Element name="Out-team">
                <OurTeam/>
            </Element>

            

            
        </>
    )
}

export default Content
