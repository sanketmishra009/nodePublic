import React, { useContext, useState } from 'react'
import Header from '../components/Header';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import userContext, { UserContextData } from '../contexts/UserContext';

const UserSignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContextData);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        const newUser = {
            fullname: {
                firstname: firstname,
                lastname: lastname
            }, email: email, password: password
        }
        axios.post(`${import.meta.env.VITE_SERVER_URL}/users/register`, newUser)
            .then((response) => {
                if (response.status == 201) {
                    const data = response.data;
                    console.log('response data:', data)
                    setUser(data.user);
                    localStorage.setItem('token', data.token);
                    navigate('/home');
                }
            })


        setEmail('');
        setPassword('');
        setFirstname('');
        setLastname('');
    };
    return (
        <div className='bg-slate-800 h-screen w-screen flex flex-col justify-between items-center  '>
            <Header captain="false" />
            <div className="flex h-20 w-70 bg-white  items-center justify-center px-4 mt-8">
                <h1 className='text-base font-semibold leading-8 text-[1.5rem]'>User Sign Up!</h1>
            </div>
            <div className=' bg-slate-400 mt-4 py-7 px-8 flex items-center flex-col-reverse flex-start'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center '>
                        <div className=' text-base  font-semibold rounded px-3'>
                            <h1 className="text-[2rem]">What's your name ?</h1>
                            <div className='flex gap-2'>
                                <input type="text" required value={firstname} className="input-field w-1/2" placeholder='First'
                                    onChange={(e) => { setFirstname(e.target.value) }} />
                                <input type="text" required value={lastname} className='input-field w-1/2' placeholder='Last'
                                    onChange={(e) => { setLastname(e.target.value) }} />
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-semibold text-[2rem]'>What's your email ?</h1>
                            <input type="email" required value={email} className='border-2 border-black  input-field rounded-lg  bg-[#eee]'
                                onChange={(e) => { setEmail(e.target.value); }} placeholder='email.google.yahoo@orlando.com' />
                            <input type="password" placeholder='Password' required value={password} className='border-2 border-black  input-field rounded-lg  bg-[#eee]'
                                onChange={(e) => { setPassword(e.target.value); }} />
                            <button type='submit' className='bg-[#111] text-white w-[80%] mt-4 rounded-lg flex justify-center py-3 text-lg'>Signup</button>
                        </div>
                    </div>
                </form>
                {/* <p className='mt-4'>Join our fleet... <Link to='/captain-signup' className='text-[#993557]'>Create new account</Link></p> */}
            </div>
            {/* div for captain login */}
            <div className="bottom-0  mt-7 py-5 pb-8 px-10">
                <p className='text-xs leading-[1rem] font-thin text-red-400'>By accessing or utilizing our services, you agree to comply with and be bound by these Terms. Users are required to adhere to applicable laws, avoid unauthorized use, and respect the rights and property of Mishra and others. Mishra reserves the right to modify or terminate services, update Terms, or restrict access at its discretion.</p>
            </div>
        </div>
    )
}

export default UserSignUp
