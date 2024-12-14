import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserCOntext';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Input, Button, Typography } from '@mui/material';

function Login() {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { user, loginUser } = useContext(UserContext)

    const onClickLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('AccountAPI/login', {
                "username": userName,
                "password": password,
            });

            console.log(response.data.status)

            if (response.data.status) {
                console.log("I can get to here")
                loginUser(userName)
                console.log("can i get to here")
                console.log(response.data, "Login clicked")

                localStorage.setItem('authToken', response.data.data.token);

                navigate('/');
            } else {
                setError('Could not sign in. Please try again.')
            }
        } catch (err) {
            setError('Invalid account details. Please try again')
        }
    };

    return (
            <Card>
                <CardContent style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>
                    <Typography variant='h5' component='div' sx={{color: '#ffffff'}}>
                        Log in!
                    </Typography>
                    <Input
                        required
                        placeholder='Username'
                        label="Username"
                        variant="filled"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                    <Input
                        required
                        placeholder='Password'
                        type='password'
                        label="Password"
                        variant="filled"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </CardContent>
                <CardActions style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>
                    <Button size='small' variant='contained' onClick={onClickLogin} style={{width: '100%'}}>
                        Log in
                    </Button>
                    <Typography gutterBottom variant='body1' sx={{color: '#ffffff'}}>
                        Don't have an account?
                        <Typography
                        as="a"
                        href="/signup"
                        variant="small"
                        color="blue-gray"
                        sx={{marginLeft: '5px'}}
                    >
                        Sign up
                    </Typography>
                    </Typography>
                </CardActions>
            </Card>
    )
}

export default Login;
