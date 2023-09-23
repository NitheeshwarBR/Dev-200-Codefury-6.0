import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert'
import MenuItem from '@mui/material/MenuItem'
import Input from '@mui/material/Input';
import './Signup.css';

const domains = [
    {
        value: 'instagram',
        label: 'instagram',
    },
    {
        value: 'facebook',
        label: 'facebook',
    },
    {
        value: 'whatsapp',
        label: 'whatsapp',
    },
    {
        value: 'snapchat',
        label: 'snapchat',
    },
    {
        value: 'others',
        label: 'others',
    },
];

function OnlineHarrasment() {
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);

    const handleImageUpload = (event) => {
        const uploadedImages = Array.from(event.target.files);
        setImages(uploadedImages);

        const imageUrls = uploadedImages.map((image) => URL.createObjectURL(image));
        setImagePreviews(imageUrls);
    };

    return (
        <div className='signup-page'>
            <div className='signup-main'>
                <div className='headers'>
                    <h2>Online Harrasment</h2>
                    <p>Empower yourself against the shadows of online harassment by bravely </p>
                    <p>voicing your experiences</p>
                    <p>and taking a stand for a safer digital world.</p>
                </div>

                <form>
                    <div className='additional'>

                        <TextField
                            required
                            className='Extra'
                            id="outlined-select-currency"
                            select
                            label="Domains"
                            defaultValue="whatsapp"
                            helperText="Please select Domain"
                        >
                            {domains.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className='additional'>

                        <TextField
                            className='Extra'
                            required
                            id='outlined-required'
                            label='Phone'
                        />
                    </div>

                    &nbsp;&nbsp;
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            id="outlined-textarea"
                            label="Description"
                            placeholder="description"
                            multiline
                        />

                    </div>

                    <br></br>
                    <div className='additional'>
                        <TextField
                            className='Extra'
                            required
                            id='outlined-required'
                            label='profileLink'

                        />
                    </div>

                    <br></br>
                    <div className='additional'>
                        <Input
                            className='Extra'
                            required
                            type="file"
                            id='outlined-required'
                            inputProps={{ multiple: true }}
                            onChange={handleImageUpload}  // Specify accepted file types
                        />
                    </div>
                    <br></br>

                    <div className='additional'>
                        <Button variant="contained" id="signupbtn" >
                            Submit Complaint
                        </Button>
                    </div>
                </form>

            </div>
                <div className="image-preview-container">
                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Screenshots (Preview)</h3>
                    {imagePreviews.map((previewUrl, index) => (
                        <img key={index} src={previewUrl} alt={`Image ${index + 1}`} className="image-preview" style={{ width: '100%', height: '340px' }} />
                    ))}
                </div>

        </div>
    );
}


export default OnlineHarrasment;
