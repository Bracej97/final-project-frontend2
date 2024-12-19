//Profile page
import React, {useContext} from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import profilePic from '../assets/SBC24-Final-project-blank-profile-pic.png';
//change first name last name 
function Profile(){
    const { user } = useContext(UserContext)
    return (
        <>
            <div className="Profile">
                <div className="profile-Picture">
                    <img src={profilePic} alt="profile-picture"/>
                </div>
                <div className="profile-Options">
                <div className="profile-Greeting">
                    <h1>Hello {user.username}</h1>
                </div>
                </div>
            </div>
        </>
    )
}

export default Profile
