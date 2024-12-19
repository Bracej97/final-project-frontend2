//Event page
import React from "react";
import { fetchEvents } from '../events/EventsAPI.js';
import { EventsList } from '../events/EventsList.js';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { List, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from '../api/axios';

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getAllEvents = async () => {
            const response = await api.get('EventAPI/')
            setEvents(response.data.data)

            return Events;
        }
        getAllEvents()
    }, []);

    console.log(events);

    return (
        <div>

    <div id="events-page">
        <h1>Explore Events</h1>
        <div className="controls">
            <input type="text" id="search-events" placeholder="Search events..." />
            <select id="category-filter">
                <option value="all">All Categories</option>
                <option value="academic">Academic</option>
                <option value="social">Social</option>
                <option value="sports">Sports</option>
            </select>
        </div>
        <div id="events-container">
            <div style={{
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignSelf: 'stretch',
                    gap: '10px',
                    marginTop: '10px'
                }}>
                    {events.map((event) => (
                        <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: '#444444'}} key={event.id}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                                    {event.event_name}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#ffffff' }}>
                                    {event.event_description}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ffffff' }}>
                                    Date: {event.event_date}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#ffffff' }}>
                                    Time: {event.event_start} - {event.event_end}
                                </Typography>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                <Button size="small" variant="contained"><Link to={`/get/${event.id}`} style={{ color: '#222222' }}>View event</Link></Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
        </div>
    </div>

        </div>
    )


    const EventsPage = async () => {
        const eventsContainer = document.getElementById('events-container');
        const searchInput = document.getElementById('search-events');
        const categoryFilter = document.getElementById('category-filter');

        // Fetch and render events
        const renderEvents = async () => {
            const searchQuery = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            // Fetch events and filter them
            const events = await fetchEvents(selectedCategory);
            const filteredEvents = events.filter(event =>
                event.name.toLowerCase().includes(searchQuery)
            );

            eventsContainer.innerHTML = EventsList(filteredEvents, likeEvent, addToCalendar);
        };

        // Handle user interactions
        searchInput.addEventListener('input', renderEvents);
        categoryFilter.addEventListener('change', renderEvents);

        // Interaction functions
        const likeEvent = (id) => alert(`You liked event #${id}`);
        const addToCalendar = (name, time) =>
            alert(`Event "${name}" at ${time} added to your calendar!`);

        // Initial render
        await renderEvents();
    };

    document.addEventListener('DOMContentLoaded', EventsPage);

    return (
        <div>

    <div id="events-page">
        <h1>Explore Events</h1>
        <div className="controls">
            <input type="text" id="search-events" placeholder="Search events..." />
            <select id="category-filter">
                <option value="all">All Categories</option>
                <option value="academic">Academic</option>
                <option value="social">Social</option>
                <option value="sports">Sports</option>
            </select>
        </div>
        <div id="events-container"></div>
    </div>

        </div>
    )
}

export default Events
