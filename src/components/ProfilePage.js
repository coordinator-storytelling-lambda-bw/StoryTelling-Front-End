import React, { useState, useEffect } from 'react';
import config from './AxiosConfig'
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState()
    const [stories, setStories]= useState([])

    useEffect(() => {
        axios
        .get('https://storytelling-back-end.herokuapp.com/api/users/logged', config())
        .then(res => {
            setUser(res.data)
            console.log(res)
        })
        axios
        .get('https://storytelling-back-end.herokuapp.com/api/stories/user/stories', config())
        .then(res => {
            console.log(res, 'res')
            setStories(res.data)
        })
    }, [])
    if(!user) return <div>Loading...</div>
    return (
        <div className='donor-profile'>
            <div className='donor-header'>
                <h1>{user.firstName} {user.lastName} Profile</h1>
            </div>
            <div  className='donor-info'>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Country: {user.country}</p>
                <p> Worktitle: {user.workTitle}</p>
                <h1>Saved Stories</h1>
            {stories.map(story=>(
                <div className='saved-item'>{story.title}</div>
            ))}
        </div>
            </div>
            
    )
}
export  default ProfilePage