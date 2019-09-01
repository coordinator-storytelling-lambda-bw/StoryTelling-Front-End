import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    const logOut = () => {
        window.location.reload()
        localStorage.removeItem('token')
    }
    return (
        <div className='flex space'>
            <h1>StoryTelling</h1>
            {token ? 
                <div className='nav'>
                    <Link to='/feed'><button className='nav-link'>Main Feed</button></Link>
                    <Link to='/add'><button className='nav-link'>Add Story</button></Link>
                    <Link to='/profile'><button className='nav-link'>Profile</button></Link>
                    <button className='nav-link' onClick={logOut}>Log Out</button>
                    <span className='welcome'>Welcome {user.username}</span>
                </div>
                :
                <div>
                    <Link to='/'><button  className='nav-link'>Home</button></Link>
                </div>
            }
            {/* <div className='flex'>
            
            
                {token ? Sign Out</button> : null}
            </div> */}
            
            
        </div>
    )
}

export default Nav