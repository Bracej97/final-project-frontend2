//Home Page
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useState } from "react";
import data from '../mock/user-mock.json';
import { UserContext } from "../contexts/UserCOntext";

    //get json data
    // read it and look at id number and name
    // set name hook to name in json data

function Home(){
    const [name, setName] = useState('');
    const { user } = useContext(UserContext)

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([])
    const handleInputChange = (e) => {
        const query = e.target.value.toLowerCase();
        setId(query);

    const results = data.filter((item) =>
        item.name.toLowerCase().includes(query)
    );
    setFilteredResults(results);
}

    return (
        <div>
            <input type="text" className='input' id="id" onKeyDown={handleInputChange}></input>
            <div className="card-holder">
                <div className="card">
                    <h2>
                        Hello {user.username}
                    </h2>
                </div>
                <div className="card">
                    <Link to='/profile'>Profile</Link>
                </div>
                <div className="card">
                    <Link to='/events'>Events</Link>
                </div>
                <div className="card">
                    <Link to='/faq'>FAQ</Link>
                </div>
                <div className="card">
                    <h1> Results</h1>
                </div>
                <div className="card">
                    <h1> Lorum Ipsum</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
