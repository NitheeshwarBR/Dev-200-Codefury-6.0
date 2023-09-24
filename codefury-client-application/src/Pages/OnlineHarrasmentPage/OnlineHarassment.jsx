import React, { useState } from 'react';
import { Button, LinearProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert'
import MenuItem from '@mui/material/MenuItem'
import Input from '@mui/material/Input';
import './OnlineHarassment.css';

import storage from "../../APIs/firebase_credentials"
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage"

import axios_client from "../../APIs/AxiosClient"
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext'
import DashboardComponent from '../../Components/DashboardComponent';

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

    const { user } = useContext(AppContext)

    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [profileLink, setProfileLink] = useState('');
    const [domain, setDomain] = useState('')

    const [isFileUploading, setIsFileUploading] = useState(false)
    const [fileUpoadProgress, setFileUploadProgress] = useState(0)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarSeverity, setSnackbarSeverity] = useState("success")
    const [snapbarMessage, setSnackbarMessage] = useState();


    const handleImageUpload = (event) => {
        const uploadedImages = Array.from(event.target.files);
        setImages(uploadedImages);

        const imageUrls = uploadedImages.map((image) => URL.createObjectURL(image));
        setImagePreviews(imageUrls);
    };

    const handleSubmitComplaint = async () => {
        const urls = []
        for await (let image of images) {
            urls.push(await uploadFile(image))
        }
        console.log(urls)

        try {
            console.log("uploading to server")
            const data = { victimId: user._id, domain, description, phone, screenshots: urls }
            console.log(data)
            await axios_client.post("/harassments/raise-complaint", data)
            alert("Success")
        } catch (err) {
            alert("login required")
            console.log(err)
        }
    }
    function uploadFile(file) {
        const promise = new Promise(function (resolve, reject) {
            console.log(storage)
            setFileUploadProgress(0)
            setIsFileUploading(true)
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on("state_changed", (snapshot) => {
                const per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log(per)
                setFileUploadProgress(per)
            }, (err) => {
                console.log(err)
                setSnackbarSeverity("error")
                setSnackbarMessage("Cannot upload file")
                reject(err)
            }, async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref)
                // console.log(url)
                setSnackbarSeverity("success")
                setSnackbarMessage("File uploaded successfully")
                setShowSnackbar(true)
                setFileUploadProgress(0)
                setIsFileUploading(false)
                resolve(url)
            })
        })
        return promise;
    }


    return (
        <>
            <DashboardComponent />



            <div className="harrasment-container">
                <div className='signup-page'>

                    <div className='signup-main'>
                        <div className='headers'>
                            <h2>Online Harrasment</h2>
                            <p>Empower yourself against the shadows of online harassment by bravely </p>
                            <p>voicing your experiences</p>
                            <p>and taking a stand for a safer digital world.</p>
                        </div>
                        <div className="additional">


                            <form className='auth-from'>
                                <Snackbar
                                    open={showSnackbar}
                                    autoHideDuration={3000}
                                    onClose={() => setShowSnackbar(false)}
                                >
                                    <Alert
                                        onClose={() => setShowSnackbar(false)}
                                        severity={snackbarSeverity}
                                        sx={{ width: '100%' }}>
                                        {snapbarMessage}
                                    </Alert>
                                </Snackbar>
                                <div className='additional'>
                                    <TextField
                                        required
                                        className='Extra'
                                        id="outlined-select-currency"
                                        select
                                        label="Domains"
                                        defaultValue="whatsapp"
                                        helperText="Please select Domain"
                                        value={domain}
                                        onChange={(e) => { setDomain(e.target.value) }}
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
                                        value={phone}
                                        onChange={(e) => { setPhone(e.target.value) }}
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
                                        value={description}
                                        onChange={(e) => { setDescription(e.target.value) }}
                                    />

                                </div>

                                <br></br>
                                <div className='additional'>
                                    <TextField
                                        className='Extra'
                                        required
                                        id='outlined-required'
                                        label='profileLink'
                                        value={profileLink}
                                        onChange={(e) => { setProfileLink(e.target.value) }}

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
                                {
                                    // isFileUploading &&
                                    <div className="additional">
                                        <LinearProgress variant="determinate" color="success" value={50 || fileUpoadProgress} size="large" sx={{ height: 10, borderRadius: 5, margin: "10px" }} />
                                    </div>

                                }
                                <div className='additional'>
                                    <Button variant="contained" id="signupbtn" onClick={handleSubmitComplaint} >
                                        Submit Complaint
                                    </Button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>

                <div className="image-preview-container">
                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Screenshots (Preview)</h3>
                    {imagePreviews.map((previewUrl, index) => (
                        <img key={index} src={previewUrl} alt={`Image ${index + 1}`} className="image-preview" style={{ width: '100%', height: '340px' }} />
                    ))}
                </div>

            </div>
        </>


    );
}


export default OnlineHarrasment;
