import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Box, Grid2, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from '../api/axios';

function FAQS() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getAllFAQ = async () => {
            try {
                const response = await api.get('FAQAPI/');
                console.log(response.data)
                setList(response.data?.data || []); // Safely set the list or an empty array
            } catch (error) {
                console.error("API Error:", error); // Handle any errors from the API
                setList([]); // Ensure list is set to an empty array if an error occurs
            }
        };
        getAllFAQ();
    }, []);

    // Render the FAQ page
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
                    FAQ's
                </Typography>
            </Box>

            {/* FAQ Section */}
            <Box sx={{ width: "90%", margin: "0 auto" }}>
                <Typography
                    variant="h5"
                    sx={{
                        color: "#001f3f", // Navy text
                        fontWeight: "bold",
                        marginBottom: "20px",
                        textAlign: "center",
                    }}
                >
                    Popular Questions
                </Typography>

                {/* Check if the list is empty */}
                {list.length === 0 ? (
                    <Typography
                        variant="h6"
                        sx={{ textAlign: "center", color: "#888", marginTop: "20px" }}
                    >
                        No FAQs available.
                    </Typography>
                ) : (
                    <Grid2 container spacing={2} justifyContent="center">
                        {list.map((faq, index) => (
                            <Grid2 item xs={3} key={index}>
                                <Accordion
                                    sx={{
                                        borderRadius: "8px",
                                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                        width: {xs:"250px", md:"28vw"},
                                        "&:before": {
                                            display: "none", // Remove default outline
                                        },
                                        "&:hover": {
                                            transform: "scale(1.02)", // Slight hover effect
                                            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: "#FFD700" }} />}
                                        aria-controls={`panel${index}-content`}
                                        id={`panel${index}-header`}
                                        sx={{
                                            backgroundColor: "#070734", // Navy background
                                            color: "#ffffff", // Gold text
                                            display: "flex",
                                            justifyContent: "center",  // Center content horizontally
                                            textAlign: "center",       // Center text inside
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: "bold", width:"100%", textAlign:"center" }}>
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            backgroundColor: "#f4f4f4", // Light background
                                            color: "#333", // Darker text
                                            padding: "20px",
                                        }}
                                    >
                                        <Typography>{faq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid2>
                        ))}
                    </Grid2>
                )}
            </Box>
        </Box>
    );
}

export default FAQS;
