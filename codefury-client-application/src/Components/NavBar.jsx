import React from 'react'
import {Link} from "react-router-dom"
import '../Components/NavBar.css'
function NavBar() {
    return (
        <div className='acutal-nav'>
            <div className='main-nav'>
                <div className='navigation'>
                    <div className='links-div'>
                        <Link to="/Auth" underline="hover" className="Links">
                            {'Authentication'}
                        </Link>
                        <Link to="/online-harassment" underline="hover" className="Links">
                            {'Online Harassment'}
                        </Link>
                        <Link to="/chat-Bot" underline="hover" className="Links">
                            {'ChatBot'}
                        </Link>
                        <Link to="/about-team" underline="hover" className="Links">
                            {'About Team'}
                        </Link>
                        <Link to="/therapist" underline="hover" className="Links">
                            {'Therapist'}
                        </Link>
                        
                    </div>

                </div>
            </div>
        </div>

    )
}

export default NavBar
