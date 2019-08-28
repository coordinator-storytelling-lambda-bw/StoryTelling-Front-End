import React, { useState, useEffect } from 'react';
import config from './AxiosConfig'
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        axios
        .get('https://storytelling-back-end.herokuapp.com/api/users/logged', config())
        .then(res => {
            setUser(res.data)
            console.log(res)
        })
    }, [])

    if(!user) return <div>Loading...</div>
    return (
        <div>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
            <h2>{user.country}</h2>

        </div>
    )
}

export  default ProfilePage