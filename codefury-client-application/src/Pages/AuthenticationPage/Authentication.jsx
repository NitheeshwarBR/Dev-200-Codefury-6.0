import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert'
import '../AuthenticationPage/Authentication.css';

import axios_client from '../../APIs/AxiosClient';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext'
function Authentication() {

    const {setIsLoggedIn,setUser}=useContext(AppContext)

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [open, setOpen] = useState(false);
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailNameChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNameChange = (e) => {
        setPhone(e.target.value);
    };

    const handlePasswordNameChange = (e) => {
        setPassword(e.target.value);
    };
    const changeSignupState = () => {
        setIsSignedUp(!isSignedUp)
    }
    const handleSignupClick = async () => {
        try {
            const {data}=await axios_client.post("/auth/register", { firstName: firstname, lastName: lastname, email, phone, password })
            setIsLoggedIn(true)
            setUser(data.user)
            setOpen(true)
        } catch (err) {
            console.log(err)
        }
        // try {
        //     // const respone = await fetch('http://localhost:3030/auth/register', {
        //     //     method: "POST",
        //     //     headers: {
        //     //         'Content-Type': 'application/json'
        //     //     },

        //     //     body: JSON.stringify({ firstName: firstname, lastName: lastname, email, phone, password })
        //     // });

        //     if (respone.ok) {
        //         setOpen(true)
        //         setIsSignedUp(false)
        //     }

        // }catch(error){
        //     console.log(error)
        // }
    }
    const handleLoginClick = async () => { 
        try {
            const {data}=await axios_client.post("/auth/login", { email,  password })
            setIsLoggedIn(true)
            setUser(data.user)
            setOpen(true)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    if (!isSignedUp) {
        return (
            <div className='signup-main'>
                <div className='headers'>
                    <h2>Signup</h2>
                    <p>Accelerate your access to our 'product' and amplify your </p>
                    <p>experience by completing the signup.</p>
                </div>

                <form>
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            required
                            id='outlined-required'
                            label='First Name'
                            value={firstname}
                            onChange={handleFirstNameChange}
                        />
                    </div>

                    &nbsp;&nbsp;
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            id='outlined-basic'
                            label='Last Name'
                            value={lastname}
                            onChange={handleLastNameChange}
                        />
                    </div>

                    <br></br>
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            required
                            id='outlined-required'
                            label='Email'
                            value={email}
                            onChange={handleEmailNameChange}
                        />
                    </div>

                    <br></br>
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            required
                            id='outlined-required'
                            label='Mobile Number'
                            value={phone}
                            onChange={handlePhoneNameChange}
                        />
                    </div>

                    <br></br>
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            required
                            type='passwor'
                            id='outlined-required'
                            label='Password'
                            value={password}
                            onChange={handlePasswordNameChange}
                        />
                    </div>

                    <br></br>
                    <div>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <div className='additional'>
                                <Button variant="contained" id="signupbtn" onClick={handleSignupClick}>
                                    Create Account
                                </Button>
                            </div>

                            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Account Created Successfully
                                </Alert>
                            </Snackbar>
                        </Stack>
                    </div>


                    <div className='additional'>
                        <p>Already a Registered User?</p>
                        &nbsp;
                        <Link onClick={changeSignupState} underline='hover' id='authLink'>{'Login'}</Link>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className='signup-main'>
                <div className='headers'>
                    <h2>Login</h2>
                    <p>Enhance your engagement and unlock the full potential of our 'product'</p>
                    <p>by entering your <b>Login Credentials</b> </p>
                </div>
                <form>
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            required
                            id='outlined-required'
                            label='Email'
                        />
                    </div>
                    <br /> <br />
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            required
                            id='outlined-required'
                            label='Password'
                        />
                    </div>
                    <div>
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <div className='additional'>
                                <Button variant="contained" id="signupbtn" onClick={handleLoginClick}>
                                    Login
                                </Button>
                            </div>

                            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    Login Successful
                                </Alert>
                            </Snackbar>
                        </Stack>
                    </div>
                    <div className='additional'>
                        <p>Create a New Account ?</p>
                        &nbsp;
                        <Link onClick={changeSignupState} underline='hover' id='authLink'>
                            {'Signup'}
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Authentication;