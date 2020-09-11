import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import './styles.scss'

const Home=() => {

    const [sideNav, changeSidenav]= useState(false)

    return (
    <>
    <Header sideNav={sideNav} changeSidenav={changeSidenav} />
    <div className='main-section' onClick={()=>changeSidenav(false)}>
        <div className='main-overlay'></div> 
        <video id='video' className='main-video' autoPlay loop muted>
            <source src="assets/gym.mp4" type="video/mp4" />
        </video>
        <div className='info-section'>
            <span className='header'>
                WORK HARDER, GET STRONGER
            </span>
            <span className='main-header'>
                EASY WITH OUR <span className='main-header-caption-highlight'>GYM</span>
            </span>
            <button className='member-button'>
                BECOME A MEMBER
            </button>
        </div>
    </div>
    <div className='choose-program'>
        <div className='choose-program-main-section'>
            CHOOSE <span className='choose-program-main-section-highlighted'>PROGRAM</span>
            <div classname='choose-program-top-img'>
                <img alt='lines' src='assets/line-dec.png' />
            </div>
            <div className='choose-program-info'>
                Training studio is free CSS template for gyms and fitness centers. You are allowed to use this 
                layoutfor your business website.
            </div>
        </div>
        <div className='programs-section'>
            <div className='program'>
                <div className='program-img'>
                    <img alt='program' src='assets/features-first-icon.png' />
                </div>
                <div className='program-info'>
                    <span className='program-info-heading'>
                        Basic Fitness
                    </span>
                    <span className='program-info-content'>
                        Please donot redistribute this template zip file on any template
                        collection website. Thisis not allowed. 
                    </span>
                    <span className='program-discover-more'>
                        DISCOVER MORE
                    </span>
                </div>
            </div>
            <div className='program'>
                <span className='program-img'>
                    <img alt='program' src='assets/features-first-icon.png' />
                </span>
                <div className='program-info'>
                    <div className='program-info-heading'>
                        Advanced Muscle Course
                    </div>
                    <div className='program-info-content'>
                        You may want ot browse through <span className='program-info-highlighted'>Digital Marketing</span> or 
                        <span className='program-info-highlighted'> Corporate</span> HTML CSS Templates.
                        on our website.
                    </div>
                    <div className='program-discover-more'>
                        DISCOVER MORE
                    </div>
                </div>
            </div>
            <div className='program'>
                <div className='program-img'>
                    <img alt='program' src='assets/features-first-icon.png' />
                </div>
                <div className='program-info'>
                    <span className='program-info-heading'>
                        New Gym Training
                    </span>
                    <span className='program-info-content'>
                    You may want ot browse through Digital Marketing or 
                    Corporate HTML CSS Templates. 
                    </span>
                    <span className='program-discover-more'>
                        DISCOVER MORE
                    </span>
                </div>
            </div>
            <div className='program'>
                <div className='program-img'>
                    <img alt='program' src='assets/features-first-icon.png' />
                </div>
                <div className='program-info'>
                    <span className='program-info-heading'>
                        Yoga Training
                    </span>
                    <span className='program-info-content'>
                        Please donot redistribute this template zip file on any template
                        collection website. Thisis not allowed. 
                    </span>
                    <span className='program-discover-more'>
                        DISCOVER MORE
                    </span>
                </div>
            </div>
            <div className='program'>
                <div className='program-img'>
                    <img alt='program' src='assets/features-first-icon.png' />
                </div>
                <div className='program-info'>
                    <span className='program-info-heading'>
                        Basic Muscle Course
                    </span>
                    <span className='program-info-content'>
                         Credit goes <span className='program-info-highlighted'>Pexels website</span> for images and video background used in this
                         HTML template.
                    </span>
                    <span className='program-discover-more'>
                        DISCOVER MORE
                    </span>
                </div>
            </div>
            <div className='program'>
                <div className='program-img'>
                    <img alt='program' src='assets/features-first-icon.png' />
                </div>
                <div className='program-info'>
                    <span className='program-info-heading'>
                        Body Building Course
                    </span>
                    <span className='program-info-content'>
                        You may want ot browse through Digital Marketing or 
                        Corporate HTML CSS Templates.  
                    </span>
                    <span className='program-discover-more'>
                        DISCOVER MORE
                    </span>
                </div>
            </div>

        </div>
    </div>
    </>)
}

export default Home