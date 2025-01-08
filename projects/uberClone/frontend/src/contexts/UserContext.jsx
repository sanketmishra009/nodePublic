import React, { createContext, useState } from "react";

const UserContext = ({ children }) => {
    const UserContextData = createContext({});

    const [user, setUser] = useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',

    });
    return (
        <div>
            <UserContextData.Provider value={{ user, setUser }} >
                {children}
            </UserContextData.Provider >
        </div >
    );
};


export default UserContext;
