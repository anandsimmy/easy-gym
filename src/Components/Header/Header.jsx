import React from 'react'
import './styles.scss'

const Header=({ sideNav,changeSidenav }) => {

    return (
        <div className='navbar'>
            <div className='mobile-hamburger'>
                <i class="material-icons" onClick={()=>changeSidenav(true)}>menu</i>
            </div>
            { sideNav && 
            <ul className='side-nav'> 
                <li className='navbar-highlighted'>HOME</li>
                <li>ABOUT</li>
                <li>CLASSES</li>
                <li>SCHEDULES</li>
                <li>CONTACT</li>
                <button className='sign-up'>
                    SIGN UP
                </button>
            </ul> 
            }
            <div className='left-items'>
                TRAINING <span className='navbar-highlighted'>STUDIO</span>
            </div>
            <div className='right-items'>
                    <span className='navbar-highlighted'>HOME</span>
                    <span>ABOUT</span>
                    <span>CLASSES</span>
                    <span>SCHEDULES</span>
                    <span>CONTACT</span>
                    <button className='sign-up'>
                        SIGN UP
                    </button>
            </div>
        </div>
    )
}

export default Header