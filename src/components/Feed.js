import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StoryGrid = styled.div`

display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
max-width: 900px;
margin: 20px auto;

`

const StoryBox = styled.div`
  
  background-color: #14b1ab;
  width: 400px;
  padding: 5px 20px 20px 20px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 1);
  margin-bottom: 20px;
  
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
 
`;

const Feed = () => {
  const [stories, setStories] = useState();
  const [country, setCountry] = useState('all');
  console.log(stories);
  useEffect(() => {
    axios
      .get('https://storytelling-back-end.herokuapp.com/api/stories')
      .then((res) => {
        setStories(res.data);
      });
  }, []);
  if (!stories) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <select
          onChange={(e) => setCountry(e.target.value)}
          className='country-tabs'>
          <option className='nav-link'>All</option>
          <option className='nav-link'>bolivia</option>
          <option className='nav-link'>brazil</option>
          <option className='nav-link'>cambodia</option>
          <option className='nav-link'>colombia</option>
          <option className='nav-link'>ecuador</option>
          <option className='nav-link'>el salvador</option>
          <option className='nav-link'>ghana</option>
          <option className='nav-link'>guatemala</option>
          <option className='nav-link'>haiti</option>
          <option className='nav-link'>honduras</option>
          <option className='nav-link'>kiribati</option>
          <option className='nav-link'>madagascar</option>
          <option className='nav-link'>mongolia</option>
          <option className='nav-link'>nicaragua</option>
          <option className='nav-link'>paraguay</option>
          <option className='nav-link'>peru</option>
          <option className='nav-link'>philippines</option>
          <option className='nav-link'>sierra leone</option>
          <option className='nav-link'>zimbabwe</option>
        </select>
      </div>

      <StoryGrid>
        {stories.map((each) => {
          console.log(each.country);
          console.log(country);
          if (country.toLowerCase() === 'all') {
            return (
              <div>
                <StoryBox key={each.id}>
                  <h2>"{each.story}"</h2>
                  <h3>A story by {each.posted_by}</h3>
                  <NavLink to={`/feed/${each.id}`}><h5>Full Story</h5></NavLink>
                </StoryBox>
              </div>
            );
          } else if (each.country.toLowerCase() === country.toLowerCase()) {
            return (
              <div>
                <StoryBox key={each.id}>
                  <h2>"{each.story}"</h2>
                  <h3>A story by {each.posted_by}</h3>
                  <NavLink to={`/feed/${each.id}`}><h5>Full Story</h5></NavLink>
                </StoryBox>
              </div>
            );
          }
        })}
      </StoryGrid>
    </div>
  );
};

export default Feed;
