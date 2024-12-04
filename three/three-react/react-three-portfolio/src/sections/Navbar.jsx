import React, { useState } from 'react'
import { navLinks } from '../../constants';

const NavItems = () => {
    return (
        < ul className="nav-ul" >
            {navLinks.map((item) => (
                // console.log(item);
                <li key={item.id} className="nav-li">
                    <a href={item.href} className="nav-li_a">
                        {item.name}
                    </a>
                </li>
            ))
            }
        </ul >
    )
}
function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-slate-400 font-bold text-3xl hover:text-slate-100 transition-colors font-palanquin">
                        Sanket Mishra
                    </a>
                    <button className='text-neutral-400 hover:text-white sm:hidden flex focus:outline-none'
                        onClick={() => {
                            setIsOpen((prevstate) => !prevstate);
                        }}>
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="" className="w-6 h-6" />

                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>

        </header>
    )
}

export default Navbar
