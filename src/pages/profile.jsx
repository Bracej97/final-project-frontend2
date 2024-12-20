//Profile page
import React, {useContext, useEffect} from "react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchEvents } from '../events/EventsAPI.js';
import { EventsList } from '../events/EventsList.js';
import profilePic from '../assets/SBC24-Final-project-blank-profile-pic.png';
import api from '../api/axios';
//change first name last name
function Profile(){
    //Can delete the Edit profile options if too difficult
    //Randomly generated data, delete when ↓ finished
    const user = {username:"Test"}
    const listClasses = [
        { event: "Meeting with Team", time: "10:00 AM", location: "Conference Room A" },
        { event: "Lunch with Client", time: "12:30 PM", location: "City Cafe" },
        { event: "Project Presentation", time: "3:00 PM", location: "Main Auditorium" },
        { event: "Workout", time: "6:00 PM", location: "Fitness Center" },
        { event: "Dinner Party", time: "8:00 PM", location: "Downtown Restaurant" }
    ];
    /**
    const { user } = useContext(UserContext)
    const [list, setList] =  useState([])
    const [name, setName] = useState([])

    //Will definitely have to change this to fit API ↓,
    useEffect(() => {
        const getAllEvents = async () => {
            const responseEvent = await api.get('EventAPI/')
            setList(responseEvent.data.data)

            return list
        }
        getAllEvents()
    }, []);

    //Will also have to update this, depending on if events are stored in UserContext, probably dont need the
    //above useEffect. If so can change this to 'list' and change lines 52 and 54 to fit.
    useEffect(() => {
        const getUserData = async () => {
            const responseUser = await api.get('AccountAPI')
            setName(response.data.data)

            return name
        }

    }, []);
    */
   function EditName(){
    document.getElementsByClassName('EditName').style.visibility = 'visible';
   }

   function EditPicture(){

   }

   function EditEvents(){

   }
    return (
        <>
            <div className="Profile">
                <div className="profile-Picture">
                    <img src={profilePic} alt="profile-picture"/>
                </div>
                <div className="profile-Options">
                <div className="profile-Greeting">
                    <h1>Hello, {user.username}</h1>
                </div>
                <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} />
                <div className="profile-Events">
                    <h2>Your upcoming events</h2>
                    <div className="profile-Events-list">
                        {listClasses.map((list) =>
                        <li>
                            What?: {list.event}, When?: {list.time}, Where?: {list.location}
                        </li>
                        )}
                        <ul>

                        </ul>
                    </div>
                </div>
                <div className="profile-Edit">
                    <h2>Edit Profile</h2>
                    <div className="profile-Edit-options">
                        <ul>
                            <li onClick={EditName()}>Edit Name</li>
                            <li onClick={EditPicture()}>Add/Edit Profile Picture</li>
                            <li onClick={EditEvents()}>Edit Events</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="EditName">
                    <h2>What do you want to change your name to?</h2>
                    <input type="text"></input>
                </div>
                <div className="EditPicture">

                </div>
                <div className="EditEvents">

                </div>
            </div>



        </>
    )
}

export default Profile
