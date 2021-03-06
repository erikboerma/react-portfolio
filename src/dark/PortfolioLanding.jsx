import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
// import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import "../../public/assets/css/style.css"

const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
const PortfolioLanding = () => {
    return (
        <div className="active-dark">

            {/* <Helmet pageTitle="Portfolio Landing" /> */}

            <HeaderThree homeLink="/dark-portfolio-landing" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--3" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                        <h5>Welcome to my World, please don't mind the construction... it's a work in progress!</h5>

                                            {/* {value.category ? <span>{value.category}</span> : ''} */}
                                            <h1 className="title">Hi, I’m Erik Boerma <br/>
                                            <TextLoop>
                                                <span> Web Developer</span>
                                                <span> UI/UX Developer</span>
                                                <span> Product Manager</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2> from Philadelphia.</h2>
                                            {/* {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/ErikBioPic.jpeg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">About Me</h2>
                                            <p className="description">Hi, I'm Erik Boerma! As an energetic and motivated front end developer, I have always had a fascination with technology. Recently I graduated from an intensive Full Stack Web Developer program at The University of Pennsylvania 
                                            where I learned, experienced and enjoyed both front and back end development. Having a strong passion for front end technologies, I continue to hone my skills in HTML5, CSS3, JavaScript and ReactJS among others.  
                                            <br/> I plan to continue my passion of creating and maintaining robust websites and applications for those who have a need both personally and professionally for many years to come, growing into a true full stack developer.</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}

            

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">My Projects</h2>
                                        <p>Through the course of 6 months, I learned many different technologies.  Below are some highlights from a few of my stronger or favorite projects!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            

            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/ErikRelaxBW.jpg" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
