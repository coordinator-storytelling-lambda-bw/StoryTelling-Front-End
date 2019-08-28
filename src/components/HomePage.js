import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'

export default function HomePage(){
  const [bool, setBool] = useState(false)
  const [stories, setStories] = useState()
  console.log(stories)

  useEffect(() => {
    axios
    .get("https://storytelling-back-end.herokuapp.com/api/stories")
    .then(res => {
      setStories(res.data)
    })
  }, [])

  
  return (
    <div className='home-page'>
      <div className='homepage-box-1'>
        <h1>Welcome to the Bountiful Story Telling<br/>Web Application!</h1>
        <h4>Run by the Bountiful Childrens Foundation</h4>  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nibh ligula, sit amet efficitur risus varius vel. Nulla mauris libero, suscipit eu posuere nec, convallis sed felis. Ut dapibus volutpat arcu, non cursus nisl cursus et. In tortor dui, efficitur id nisl at, condimentum cursus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel consequat sem. Vivamus fringilla magna a est sagittis convallis. Sed eu est lacinia, egestas lectus vitae, euismod dolor. Etiam nulla turpis, congue eu ultricies et, viverra elementum nisl. Quisque semper condimentum eros ac gravida. Fusce eget iaculis erat. Nulla eleifend elementum risus vel commodo. Integer hendrerit, dui non molestie dictum, velit ante sagittis erat, vel eleifend libero neque ut tortor. Integer quis accumsan elit, lacinia tincidunt sem.</p>
      </div> 
      <div className='homepage-box-2'>
        <h2 className='log-in-header'>Sign up/Log in</h2>
        <NavLink className='btn-1' to='/signup'>Sign Up</NavLink>
        <NavLink className='btn-2' to='/login'>Log in</NavLink>
        <h3>Join the community!</h3>
      </div>
      <div className='story-preview'>
        <h1>Some Recent Stories</h1>
        <div className='stories-list'><div>stories loaded in here</div></div>
        
        <span onClick={() => setBool(!bool)} className='btn-2' to=''>See More</span>
        {!stories ? <div className={!bool ? 'none' : ''}>Loading...</div>:
          stories.map((each, index) => {
          if(index < 5) {
              return <div key={index} className={!bool ? 'none' : ''}>
                        <h3>{each.story}</h3>
                        <h6>{each.posted_by}</h6>
                      </div>
            }
          })
        }
      </div>
    </div>
)
}