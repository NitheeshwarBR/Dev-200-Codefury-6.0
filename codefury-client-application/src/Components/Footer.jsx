import React from 'react'
import './Footer.css'
function Footer(props) {
    return (
        <div className='main-footer'>
            <footer>
                    <h4>{props.copyrights}</h4>
                
               
                    <h5>{props.wishes}</h5>
            
            </footer>
        </div>
    )
}

export default Footer
