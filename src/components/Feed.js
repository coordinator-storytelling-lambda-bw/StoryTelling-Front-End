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
            <select onChange={(e) => setCountry(e.target.value)} className='country-tabs'>
                <option  className='nav-link'>All</option>
                <option  className='nav-link'>bolivia</option>
                <option  className='nav-link'>brazil</option>
                <option  className='nav-link'>cambodia</option>
                <option  className='nav-link'>colombia</option>
                <option  className='nav-link'>ecuador</option>
                <option  className='nav-link'>el salvador</option>
                <option  className='nav-link'>ghana</option>
                <option  className='nav-link'>guatemala</option>
                <option  className='nav-link'>haiti</option>
                <option  className='nav-link'>honduras</option>
                <option  className='nav-link'>kiribati</option>
                <option  className='nav-link'>madagascar</option>
                <option  className='nav-link'>mongolia</option>
                <option  className='nav-link'>nicaragua</option>
                <option  className='nav-link'>paraguay</option>
                <option  className='nav-link'>peru</option>
                <option  className='nav-link'>philippines</option>
                <option  className='nav-link'>sierra leone</option>
                <option  className='nav-link'>zimbabwe</option>

            </select>
            {stories.map((each) => {
                console.log(each.country)
                console.log(country)
                if(country.toLowerCase() === 'all'){
                    return(
                    <div key={each.id}>
                        <h2>{each.story}</h2>
                        <h5>{each.posted_by}</h5>
                        <NavLink to={`/feed/${each.id}`}>Full Story</NavLink>
                    </div>
                    )
                } else if(each.country.toLowerCase() === country.toLowerCase()) {
                    return (
                        <div>
                            <div key={each.id}>
                                <h2>{each.story}</h2>
                                <h5>{each.posted_by}</h5>
                                <NavLink to={`/feed/${each.id}`}>Full Story</NavLink>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Feed