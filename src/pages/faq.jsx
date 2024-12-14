//FAQ page
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FAQS(){
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://final-project-frontend2.onrender.com/faq/').then(
        (response) => response.json()
    ).then(
        (data) => setList(data)
    )
     }, [])

    return (
        <>
        <div>
            <ul>
                {list.map((list) =>
                <li>
                    <Accordion>
                        <AccordionSummary expandIcon= {<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">

                            <Typography>
                                {data.name}
                            </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {data.content}
                    </AccordionDetails>
                    </Accordion>
                </li>
            )}
            </ul>
        </div>
        </>
    )
}

export default FAQS
