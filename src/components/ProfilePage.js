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
        <div>
            <h1>{user.firstName} {user.lastName} Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>{user.country}</h2>
            <h2>{user.workTitle}</h2>
            <h1>Saved Stories</h1>
            {stories.map(story=>(
                <div>{story.title}</div>
            ))}
        </div>
    )
}
export  default ProfilePage