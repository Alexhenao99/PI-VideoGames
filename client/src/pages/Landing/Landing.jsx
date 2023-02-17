import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="landing">
            <Link to={'/home'}> 
                <button className='btn' > All Games </button>
            </Link>
        </div>
    )
}

export default Landing