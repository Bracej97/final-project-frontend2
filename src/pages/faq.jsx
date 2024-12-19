//FAQ page
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { List, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import api from '../api/axios';

function FAQS(){
    const [list, setList] = useState([])

    useEffect(() => {
    const getAllFAQ = async () => {
        const response = await api.get('FAQAPI/')
        setList(response.data.data)


        return list;
    }
    getAllFAQ()
}, []);


    //useEffect(() => {
    //    fetch('https://675d722063b05ed07977e472.mockapi.io/faq').then(
    //    (response) => response.json()
    //).then(
    //    (data) => setList(data)
    //)
    // }, [])

    return (
        <>
        <div className="FAQall">
            <div className="FAQ">
            <h1>FAQ's</h1>
            </div>
        <div className="FAQlist">
            <div className="PopQuest">
            <h2>Popular Questions</h2>
            </div>
            <div>
            <ul className="Questions">
                {list.map((list) =>
                <li>
                    <Accordion className="Question">
                        <AccordionSummary expandIcon= {<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography className="FAQ-question">
                                {list.question}
                            </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {list.answer}
                    </AccordionDetails>
                    </Accordion>
                </li>
            )}
            </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default FAQS
