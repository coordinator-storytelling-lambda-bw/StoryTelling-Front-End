import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Feed = () => {
    const [stories, setStories] = useState()
    console.log(stories)
    
    useEffect(() => {
        axios
        .get("https://storytelling-back-end.herokuapp.com/api/stories")
        .then(res => {
            setStories(res.data)
        })
    }, [])

    if(!stories) return <div>Loading...</div>
    return (
        <div>
            {stories.map(each => (
                <div key={each.id}>
                    <h2>{each.story}</h2>
                    <h5>{each.posted_by}</h5>
                </div>
            ))}
        </div>
    )
}

export default Feed