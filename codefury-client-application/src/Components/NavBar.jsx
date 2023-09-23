import React from 'react'
import Link from '@mui/material/Link'
import '../Components/NavBar.css'
function NavBar() {
    return (
        <div className='acutal-nav'>
            <div className='main-nav'>
                <div className='navigation'>
                    <div className='links-div'>
                        <Link href="/Auth" underline="hover" className="Links">
                            {'Authentication'}
                        </Link>
                        <Link href="/online-harassment" underline="hover" className="Links">
                            {'Online Harassment'}
                        </Link>
                        <Link href="/chatBot" underline="hover" className="Links">
                            {'ChatBot'}
                        </Link>
                        <Link href="/about-team" underline="hover" className="Links">
                            {'About Team'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavBar
