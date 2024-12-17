//Home Page
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useState } from "react";
import data from '../mock/user-mock.json';
import { UserContext } from "../contexts/UserContext";
import { Grid2, Typography, Box, Paper, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

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

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));

    return (

            <Box sx={{ width: '80vw' }}>
                <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid2 size={{xs: 4, sm: 8, md: 12}}>
                        <Item sx={{height:'150px'}}>
                            <h1 >Hello {user.username}</h1>
                        </Item>
                    </Grid2>
                    <Grid2 size="grow">
                        <Link to='/profile'>
                            <Item sx={{height:'100px', minWidth:"100px"}}>
                            <CardMedia
                                    component="img"
                                    sx={{ width: '65px', marginLeft: 'auto', marginRight: 'auto' }}
                                    image="../../public/icon_contact.png"

                                />
                                <p sx={{textAlign: 'bottom'}}>Profile</p>
                            </Item>
                        </Link>
                    </Grid2>
                    <Grid2 size="grow">
                    <Link to='/events'>
                            <Item sx={{height:'100px', minWidth:"100px"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '65px', marginLeft: 'auto', marginRight: 'auto' }}
                                    image="../../public/icon_email.png"

                                />
                                <p sx={{textAlign: 'bottom'}}>Events</p>
                            </Item>
                        </Link>
                    </Grid2>
                    <Grid2 size="grow">
                    <Link to='/faq'>
                            <Item sx={{height:'100px', minWidth:"100px"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '65px', marginLeft: 'auto', marginRight: 'auto' }}
                                    image="../../public/icon_faq.png"

                                />
                                <p sx={{textAlign: 'bottom'}}>FAQ</p>
                            </Item>
                        </Link>
                    </Grid2>
                </Grid2>
            </Box>
    )
}

export default Home
