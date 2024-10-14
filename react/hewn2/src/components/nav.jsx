import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Home from '../sections/home';
import About from '../sections/about';

function Nav() {
    return (
        <div className='relative text-yellow-700 h-20 text-lg w-full p-auto mb-8'>
            {/* <h1 className='text-3xl underline text-violet-400'> Nav</h1 > */}
            <nav className='absolute flex flex-row justify-around items-center pt-5 text-3xl  h-full w-full'>
                <Link to='/'><h1 className='absolute underline text-5xl  top-10 left-10'>Hewn.</h1></Link>
                <Link to='/about'><h1 className=''>About</h1></Link>
            </nav>
            {/* <Outlet />  */}
        </div >
    )
}

export default Nav
