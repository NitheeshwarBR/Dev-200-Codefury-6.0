import React from 'react'
import {Link} from "react-router-dom"
function DashboardComponent() {
    return (
        <div className='acutal-nav'>
            <div className='main-nav'>
                <div className='navigation'>
                    <div className='links-div'>
                        <Link to="/dashboard" underline="hover" className="Links">
                            {'DashBoard'}
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComponent
