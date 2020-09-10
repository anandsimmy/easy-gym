import React from 'react'
import './styles.scss'

const Header=() => {
    return (
        <div className='navbar'>
            <div className='left-items'>
                TRAINING <span className='navbar-highlighted'>STUDIO</span>
            </div>
            <div className='right-items'>
                    <div className='navbar-highlighted'>HOME</div>
                    <div>ABOUT</div>
                    <div>CLASSES</div>
                    <div>SCHEDULES</div>
                    <div>CONTACT</div>
                    <button className='sign-up'>
                        SIGN UP
                    </button>
            </div>
        </div>
    )
}

export default Header