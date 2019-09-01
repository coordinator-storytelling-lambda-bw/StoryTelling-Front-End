import React, {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components';

const StoryBox = styled.div`
  
  background-color: #14b1ab;
  width: 400px;
  padding: 5px 20px 20px 20px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 1);
  margin: 0 auto 20px auto;
  
  h2 {
    color: #faa220;
    background-color: #3a3480;
    border-radius: 10px;
    padding-bottom: 5px;
    text-shadow: 1px 1px 3px black;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 1);
    margin: 10px 5px 20px 5px;
  }
  h3{
    color: white;
    text-shadow: 1px 1px 1px black;
    margin-top: -10px;
  }
  h5 {
    color: white;
    width: 100px;
    background-color: #c0326a;
    border-radius: 10px;
    text-shadow: 2px 1px 1px black;
    padding: 3px 0;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 1);
    margin: 0 auto;

    :hover {
        top: 2px;
        left: 2px;
        box-shadow: none;
        position: relative;
      }
  }

  
 
`
const StoryContent = styled.div`

background-color: white;
width: 100%;
min-height: 60px;
max-height: 90px;
overflow: hidden;
text-align: left;
padding: 5px;
margin-bottom: 8px;

  p {
    color: black;

  }

`

const SeeMoreButton = styled.button`
margin-bottom: 50px;
`
;


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
      <h2>Join the Community!</h2>
        <NavLink className='btn-1' to='/signup'>Sign Up</NavLink>
        <NavLink className='btn-2' to='/login'>Log in</NavLink>
        
      </div>
      <div className='story-preview'>
        <h1>Some Recent Stories</h1>
      
        
        <SeeMoreButton onClick={() => setBool(!bool)} className='btn-2' to=''>See More</SeeMoreButton>
        {!stories ? <div className={!bool ? 'none' : ''}>Loading...</div>:
          stories.map((each, index) => {
          if(index < 5) {
              return <StoryBox key={index} className={!bool ? 'none' : ''}>
                        <h2>"{each.title}"</h2>
                  <h3>A story by {each.posted_by}</h3>
                  <StoryContent><p>{each.story}</p></StoryContent>
                  <NavLink to={`/feed/${each.id}`}><h5>Full Story</h5></NavLink>
                      </StoryBox>
            }
          })
        }
      </div>
    </div>
)
}