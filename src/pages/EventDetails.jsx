import React from "react"
import { useParams, Link } from "react-router-dom"
import { Card, CardContent, Button, CardActions, Typography, Box } from "@mui/material"
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
                    Event details
                </Typography>
            </Box>

            {/* Events Section */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
            >
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
            </Box>
        </Box>

    )
}

export default EventDetails
