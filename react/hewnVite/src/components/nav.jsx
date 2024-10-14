import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Home from '../sections/home';
import About from '../sections/about';

function Nav() {
    return (
        <div >
            <h1 className='text-3xl font-bold underline'> Nav</h1 >
            <nav className='flex flex-row p-4 bg-black text-yellow-500'>
                <ul>
                    <li >
                        <Link to="/">
                            <Home />
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <About />
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* <Outlet /> */}
        </div >
    )
}

export default Nav
