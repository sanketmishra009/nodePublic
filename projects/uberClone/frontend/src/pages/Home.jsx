import React, { useContext } from 'react'
import UserContext, { UserContextData } from '../contexts/UserContext';

const Home = () => {
    const { user, setUser } = useContext(UserContextData);
    console.log('user:', user);
    return (
        <div>
            {user ? <h1>Hello {user.fullname.firstname}</h1> : <h1>No entry!</h1>}
        </div>
    )
};

export default Home;
