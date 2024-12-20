//Event page
import React from "react";
import { fetchEvents } from '../events/EventsAPI.js';
import { EventsList } from '../events/EventsList.js';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { List, Typography, Card, CardContent, CardActions, Button, Box, Grid2 } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from '../api/axios';

function Events() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const getAllEvents = async () => {
            const response = await api.get('EventAPI/')
            console.log(response)
            setEvents(response.data.data)

            return events;
        }
        getAllEvents()
    }, []);

    console.log(events);

    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, #f4f4f4, #eaeaea)", // Light gradient background
                minHeight: "100vh", // Full page height
                padding: "20px",
                width: "68vw"
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    textAlign: "center",
                    marginBottom: "30px",
                    padding: "20px",
                    background: "#070734", // Navy background
                    color: "#FFD700", // Gold text
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Events
                </Typography>
            </Box>

            {/* Events Section */}
            <Box sx={{ width: "90%", margin: "0 auto" }}>

                {/* Check if the events is empty */}
                {events.length === 0 ? (
                    <Typography
                        variant="h6"
                        sx={{ textAlign: "center", color: "#888", marginTop: "20px" }}
                    >
                        No events available.
                    </Typography>
                ) : (
                    <Grid2 container spacing={2} justifyContent="center">
                        {events.map((event) => (
                            <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: '#070734'}} key={event.id}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                                        {event.event_name}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{justifyContent: 'center'}}>
                                    <Button size="small" variant="outlined" style={{borderColor:"#FFD700"}}><Link to={`./update/${event.id}`} style={{ color: '#ffffff' }}>Edit event</Link></Button>
                                    <Button size="small" variant="contained" style={{backgroundColor:"#FFD700"}}><Link to={`./get/${event.id}`} style={{ color: '#222222' }}>Event details</Link></Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Grid2>
                )}
            </Box>
            <Button size="large" variant="contained" sx={{marginTop:"20px", backgroundColor:"#070734"}}><Link to={`./add`} style={{ color: '#ffffff' }}>Add event</Link></Button>
        </Box>

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
