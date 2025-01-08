import React, { useState } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setcaptainData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        setcaptainData({ email: email, password: password });
        console.log(captainData);
        setEmail('');
        setPassword('');
    };
    return (
        <div className='bg-slate-800 h-screen flex flex-col justify-evenly items-center   bg-cover md:bg-cover'>
            <Header captain="true" />
            <div className='bg-slate-400 mt-4 py-7 px-8 flex flex-col items-center'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-semibold text-[30px]'>What's your email ?</h1>
                        <input type="email" required value={email} onChange={(e) => { setEmail(e.target.value); }} placeholder='email.google.yahoo@orlando.com' className='border-2 border-black w-[80%] input-field rounded-lg text-sm bg-[#eee]' />
                        <input type="password" placeholder='Password' required value={password} onChange={(e) => { setPassword(e.target.value); }} className='border-2 border-black w-[80%] input-field rounded-lg  bg-[#eee]' />
                        <button type='submit' className='bg-[#111] text-white w-[80%] mt-4 rounded-lg flex justify-center py-3 text-lg'>Login</button>
                    </div>
                </form>
                <p className='mt-4'>Join our fleet... <Link to='/captain-signup' className='text-[#993557]'>Create new account</Link></p>
            </div>
            {/* div for captain login */}
            <div className="flex flex-col items-center bg-[#087f5b] h-20 w-[12rem] rounded-xl justify-center">
                <Link to='/login' className='text-white text-xl'>Login as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin
