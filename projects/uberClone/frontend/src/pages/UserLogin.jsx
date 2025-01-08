import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        setUserData({ email: email, password: password });
        console.log(userData);
        setEmail('');
        setPassword('');
    };
    return (
        <div className='bg-slate-800 h-screen flex flex-col justify-evenly items-center bg-uber2 bg-cover md:bg-cover'>
            <Header />
            <div className='bg-slate-400 mt-4 py-7 px-8 flex flex-col items-center'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-semibold text-[30px]'>What's your email ?</h1>
                        <input type="email" required value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder='email.google.yahoo@orlando.com' className='border-2 border-black w-[80%] mt-4 p-4 rounded-lg text-sm bg-[#eee]' />
                        <input type="password" placeholder='Password' required value={password} onChange={(e) => { setPassword(e.target.value); }} className='border-2 border-black w-[80%] mt-4 p-4 rounded-lg text-[20px] bg-[#eee]' />
                        <button type='submit' className='bg-[#111] text-white w-[80%] mt-4 rounded-lg flex justify-center py-3 text-lg'>Login</button>
                    </div>
                </form>
                <p className='mt-4'>New Here? <Link to='/signup' className='text-blue-600'>Create new account</Link></p>
            </div>
            {/* div for captain login */}
            <div className="flex flex-col items-center justify-center bg-[#c41bb4] h-20 w-[12rem] rounded-xl">
                {/* <h1 className="font-semibold text-[30px]">Are you a Capitan ?</h1> */}
                <Link to='/captain-login' className='  text-xl text-white'>Log in as Capitan</Link>
            </div>
        </div>
    )
}

export default UserLogin
