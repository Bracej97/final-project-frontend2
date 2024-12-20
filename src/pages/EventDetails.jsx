import React from "react"
import { useParams, Link } from "react-router-dom"
import { Card, CardContent, Button, CardActions, Typography } from "@mui/material"
import { useState, useEffect } from "react";
import api from "../api/axios";

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        const getEvent = async () => {
            const response = await api.get(`EventAPI/get/${id}/`)
            console.log(response)
            setEvent(response.data)
        }
        getEvent()
    }, []);

    console.log(event);

    return(
        <Card sx={{ maxWidth: 345, minWidth: 300, backgroundColor: '#070734'}} key={event.id}>
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
                <Link to="/events">
                    <Button size='small' variant='outlined' color='error' style={{width: '48%'}}>
                        Back
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default EventDetails
