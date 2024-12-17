import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions, Input, Button, Typography } from '@mui/material';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { user, loginUser } = useContext(UserContext)

    const onClickSignup = async (e) => {
        e.preventDefault();
        try {
            const signupRes = await api.post('AccountAPI/signup', {
                "username": userName,
                "email": email,
                "password": password,
                "password2": password
            });
            console.log(user)

            if (signupRes.data.status) {
                const loginRes = await api.post('AccountAPI/login', {
                    "username": userName,
                    "password": password
                });

                if (loginRes.data.status) {
                    localStorage.setItem('authToken', loginRes.data.data.token);

                    loginUser(userName)

                    console.log('User signed up and logged in', userName)
                    navigate('/');
                }
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
                        Sign up!
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
                        placeholder='Email address'
                        label="Email"
                        variant="filled"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Input
                        required
                        type = 'password'
                        placeholder='Password'
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
                    <Button size='small' variant='contained' onClick={onClickSignup} style={{width: '100%'}}>
                        Sign up
                    </Button>
                    <Typography gutterBottom variant='body1' sx={{color: '#ffffff'}}>
                        Already have an account?
                        <Typography
                        as="a"
                        href="/login"
                        variant="small"
                        color="blue-gray"
                        sx={{marginLeft: '5px'}}
                    >
                        Sign in
                    </Typography>
                    </Typography>
                </CardActions>
            </Card>
    )
}

export default Signup;
