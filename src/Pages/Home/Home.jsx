import React from 'react'
import Header from '../../Components/Header/Header'
import './styles.scss'

const Home=() => {
    return (
    <>
    <Header />
    <div className='main-section'>
        <div className='main-overlay'></div> 
        <video width='100%' height='100%' autoPlay loop>
            <source src="./gym.mp4" type="video/mp4" />
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
    </>)
}

export default Home