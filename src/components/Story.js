import React, { useState, useEffect } from 'react';
import Date from './Date';
import axios from 'axios';
import styled from 'styled-components';

const StoryBox = styled.div` 
background-color: #14b1ab;
max-width: 350px;
padding: 20px;
box-shadow: 2px 2px 4px 0px rgba(0,0,0,1);

h1 {
  color: #faa220;
  background-color: #3a3480;
  border-radius: 10px;
  padding-bottom: 5px;
  text-shadow: 1px 1px 3px black;
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,1);
  
}

h2 {
  color: #C0326A;
  text-shadow: 1px 1px 1px black;
  margin-top: -10px;
}

h3 {
  color: #FAA220;
  background-color: #3a3480;
  border-radius: 10px;
  padding-bottom: 5px;
  text-shadow: 2px 1px 1px black;
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,1);
  
}

h3 span {
  color: white;
  background-color: none;
  
  
}

p {
  background-color: white;
  border-radius: 5px;
}

`

export default function Story() {
  const [story, setStory] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://storytelling-back-end.herokuapp.com/api/stories')
  //     .then((res) => {
  //       console.log(res, 'res');
  //       setStory(res.data);
  //     });
  // }, []);

  return (

  //   story.map(tales => {

  //   })

    <StoryBox>
      <h1>Story Title</h1>
      <h2>By Author</h2>
      <h3>Country</h3>
      <h3><span><Date /></span></h3>
      <p>Here is the story.</p>
      <button>DONATE</button>
    </StoryBox>
  );
}
