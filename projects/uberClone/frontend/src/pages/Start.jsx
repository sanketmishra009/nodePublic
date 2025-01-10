import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


const Start = () => {
    // console.log('inside home,')
    return (
        <div>
            <Header />
            <div className="h-screen w-full flex flex-col justify-end  bg-red-400 box-border bg-uber  bg-[5%] md:bg-cover">
                {/* <img src="/images/logo.png" alt="logo" className='w-14 ml-4 mt-4 bg-white' /> */}
                <div className=' bg-white px-10 py-15 flex flex-col items-center relative h-[20%]'>
                    <h1 className='font-semibold text-[30px]'>Get Started With Uber!</h1>
                    <Link to="/login" className='bg-black text-white w-full mt-4 rounded-lg flex justify-center py-3 text-lg md:w-[40%]'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start
