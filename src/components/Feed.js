import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom';


const Feed = () => {
    const [stories, setStories] = useState()
    const [country, setCountry] = useState('all')
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
            <div className='country-tabs'>
                <button onClick={()=>{setCountry('all')}} className='nav-link'>All</button>
                <button onClick={()=>{setCountry('Bolivia')}} className='nav-link'>bolivia</button>
                <button onClick={()=>{setCountry('brazil')}} className='nav-link'>brazil</button>
                <button onClick={()=>{setCountry('cambodia')}} className='nav-link'>cambodia</button>
                <button onClick={()=>{setCountry('colombia')}} className='nav-link'>colombia</button>
                <button onClick={()=>{setCountry('ecuador')}} className='nav-link'>ecuador</button>
                <button onClick={()=>{setCountry('el salvador')}} className='nav-link'>el salvador</button>
                <button onClick={()=>{setCountry('ghana')}} className='nav-link'>ghana</button>
                <button onClick={()=>{setCountry('guatemala')}} className='nav-link'>guatemala</button>
                <button onClick={()=>{setCountry('haiti')}} className='nav-link'>haiti</button>
                <button onClick={()=>{setCountry('honduras')}} className='nav-link'>honduras</button>
                <button onClick={()=>{setCountry('kiribati')}} className='nav-link'>kiribati</button>
                <button onClick={()=>{setCountry('madagascar')}} className='nav-link'>madagascar</button>
                <button onClick={()=>{setCountry('mongolia')}} className='nav-link'>mongolia</button>
                <button onClick={()=>{setCountry('nicaragua')}} className='nav-link'>nicaragua</button>
                <button onClick={()=>{setCountry('paraguay')}} className='nav-link'>paraguay</button>
                <button onClick={()=>{setCountry('peru')}} className='nav-link'>peru</button>
                <button onClick={()=>{setCountry('philippines')}} className='nav-link'>philippines</button>
                <button onClick={()=>{setCountry('sierra leone')}} className='nav-link'>sierra leone</button>
                <button onClick={()=>{setCountry('zimbabwe')}} className='nav-link'>zimbabwe</button>

            </div>
            {stories.map((each) => {
                console.log(each.country)
                console.log(country)
                if(each.country === country || country === 'all'){
                    return(
                <div key={each.id}>
                    <h2>{each.story}</h2>
                    <h5>{each.posted_by}</h5>
                    <NavLink to={`/feed/${each.id}`}>Full Page View</NavLink>
                </div>
                    )
                }
            })}
        </div>
    )
}

export default Feed