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
                <div>
                    <Link to='feed'><button>Main Feed</button></Link>
                    <Link to='profile'><button>Profile</button></Link>
                    <button onClick={logOut}>Log Out</button>
                    <span>Welcome {user.username}</span>
                </div>
                :
                <div>
                    <Link to='/'><button>Home</button></Link>
                </div>
                    
                


            }
            {/* <div className='flex'>
                
                
                {token ? Sign Out</button> : null}
            </div> */}
            
            
        </div>
    )
}

export default Nav