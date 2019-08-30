import React, { useState, useEffect } from 'react';
import config from './AxiosConfig'
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState()
    const [stories, setStories]= useState([])
    const [saved, setSaved]= useState([])

    useEffect(() => {
        axios
        .get('https://storytelling-back-end.herokuapp.com/api/users/logged', config())
        .then(res => {
            setUser(res.data)
        })
        axios
        .get('https://storytelling-back-end.herokuapp.com/api/stories/user/stories', config())
        .then(res => {
            setStories(res.data)
        })
        axios
        .get('https://storytelling-back-end.herokuapp.com/api/stories/saved', config())
        .then(res=>{
            console.log(res)
            setSaved(res.data)
        })
    }, [])
    if(!user) return <div>Loading...</div>
    return (
        <div className='donor-profile'>
            <div className='donor-header'>
                <h1>{user.firstName} {user.lastName} Profile</h1>
            </div>
            <div  className='donor-info'>
                <div className='info-box'>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Country: {user.country}</p>
                    <p> Worktitle: {user.workTitle}</p>
                </div>

                <h1>Saved Stories</h1>
                {saved.map(story=>(
                    <p>{story.title}</p>
                ))}
                <h1>user stories</h1>
                {stories.map(story=>(
                    <div>{story.title}</div>
                ))}
            </div>
        </div>
            
    )
}
export  default ProfilePage