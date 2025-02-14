import React, { useContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import {useParams, BrowserRouter as Router, Link} from 'react-router-dom';
import api from '../api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Input, Button, Typography, Box } from '@mui/material';
import { UserContext } from '../contexts/UserContext';
import Banner from '/Banner.png'


function EditEvent() {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventStart, setEventStart] = useState('');
    const [eventEnd, setEventEnd] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventAttendees, setEventAttendees] = useState([]);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        const getEvent = async () => {
            const response = await api.get(`EventAPI/get/${id}/`)
            console.log(response)
            setEvent(response.data)
        }
        getEvent();
    }, []);

    useEffect(() => {
        setEventName(event.event_name);
        setEventDescription(event.event_description);
        setEventDate(event.event_date);
        setEventStart(event.event_start);
        setEventEnd(event.event_end);
        setEventAttendees(event.event_attendees);
        setEventLocation(event.event_location);
    }, [event]);

    const onClickUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put(`EventAPI/update/${id}/`, {
                "event_name": eventName,
                "event_description": eventDescription,
                "event_date": eventDate,
                "event_start": eventStart,
                "event_end": eventEnd,
                "event_attendees": [1],
                "event_location": eventLocation
            });

            navigate('/events');
        } catch (err) {
            setError('Invalid event details. Please try again')
        }
    };

    return (
            <Card>
                <CardContent style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '320px'
                }}>
                    <Box
                        component="img"
                        sx={{
                        height: 100
                        }}
                        alt="Your logo."
                        src={Banner}
                    />
                    <Typography variant='h5' component='div' sx={{color: '#111111'}}>
                        Edit event
                    </Typography>
                    <Input
                        required
                        placeholder='Event name'
                        label="Event name"
                        variant="filled"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)} />
                    <Input
                        required
                        placeholder='Event description'
                        label="Event description"
                        variant="filled"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)} />
                    <Input
                        required
                        placeholder='Event date (dd/mm/yyyy)'
                        label="Event date"
                        variant="filled"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)} />
                    <Input
                        required
                        placeholder='Event start (hh:mm)'
                        label="Event start"
                        variant="filled"
                        value={eventStart}
                        onChange={(e) => setEventStart(e.target.value)} />
                    <Input
                        required
                        placeholder='Event end (hh:mm)'
                        label="Event end"
                        variant="filled"
                        value={eventEnd}
                        onChange={(e) => setEventEnd(e.target.value)} />
                    <Input
                        required
                        placeholder='Event location'
                        label="Event location"
                        variant="filled"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)} />
                </CardContent>
                <CardActions style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>

                    <Button size='small' variant='contained' onClick={onClickUpdate} style={{width: '48%'}} sx={{backgroundColor:"#070734"}}>
                        Update event
                    </Button>
                    <Link to="/events">
                        <Button size='small' variant='outlined' color='error' style={{width: '48%'}}>
                            Cancel
                        </Button>
                    </Link>
                </CardActions>
            </Card>
    )
}

export default EditEvent;
