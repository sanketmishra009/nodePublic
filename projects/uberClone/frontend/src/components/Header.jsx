import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Header = (props) => {
    // console.log(props.captain == 'true' ? '/images/captainLogo.png' : '/images/logo.png');
    return (
        <div>
            <Link to='/'
                element={<Home />}>
                <img src={props.captain == 'true' ? '/images/captainLogo.png' : "/images/logo.png"} alt="logo" className='w-14  ml-4 absolute top-4 left-5 md:left-5 md:top-4 bg-[#eee]' />
            </Link >
        </div >
    )
}

export default Header