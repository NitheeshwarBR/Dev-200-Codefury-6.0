import React from 'react'
import './ChatApp.css'
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
function ChatApp() {
    return (
        <div className='main-box'>
            <div>

            </div>

            <div className='additional'>
                <Input
                    className='Extra'
                    required
                    type="text"
                    id='outlined-required'
                    inputProps={{ multiple: true }}
                      // Specify accepted file types
                />
            </div>
        </div>

    )
}

export default ChatApp
