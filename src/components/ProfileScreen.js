import React, { useContext } from 'react';
import NavBar from './NavBar';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';

function ProfileScreen() {

    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    return (
        <div>
            <NavBar logo="./logo1.png" label1="Home" label2= "Why Us"label3="How it works"label4="Pricing"btnlabel1="Register"btnlabel2="Login"btnlabel3="Profile"/>
            <br></br>
            <br></br>
            <div className="container py-5" style={{maxWidth: 600, minHeight: "calc(100vh - 112px)"}}>
                <br></br>
                <h1>My Profile</h1>
                <div>
                    <ul>
                        <li>{firstName}</li>
                        <li>{lastName}</li>
                        <li>{email}</li>
                        <li>{avatar}</li>
                    </ul>
                </div>
            </div>  
        </div>
    )
}

export default ProfileScreen;