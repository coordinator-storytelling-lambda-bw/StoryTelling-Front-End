import React, { useState, useEffect } from 'react';
import Date from './Date';
import axios from 'axios';
import config from './AxiosConfig'
import styled from 'styled-components';

const FullStory = styled.div`
  
  background-color: #14b1ab;
  min-width: 400px;
  max-width: 800px;
  padding: 5px 20px 20px 20px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 1);
  margin: 40px auto;
  
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
text-align: left;
padding: 0 5px;
margin: 0 auto 8px auto; 

  p {
    color: black;

  }
`
const FancyButton = styled.button`

  min-width: 150px;
  border: 2px solid #3A3480;
  background: #3A3480;
  padding: 5px 8px;
  text-decoration: none;
  font-weight: bold;
  color: white;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  box-shadow: 1px 2px 0px 1px rgba(0, 0, 0, 0.69);
  margin: 5px;

  :hover {

    background: #C0326A;
    border: 2px solid #C0326A;
    transition: all ease-in-out 0.2s;
    top: 2px;
    left: 1px;
    box-shadow: none;
    position: relative;

  }

`
;

export default function Story(props) {
  const [story, setStory] = useState();
  const [editObj, setEditObj] = useState()
  const [editState, setEditState] = useState(false)
  const [logged, setlogged] = useState()
  console.log(logged)
  console.log(story)
  useEffect(()=>{
    axios.get(`https://storytelling-back-end.herokuapp.com/api/stories/individual/story/${props.match.params.id}`, config())
    .then(res=>{
      setStory(res.data)
      setEditObj(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

  useEffect(()=>{
    axios.get(`https://storytelling-back-end.herokuapp.com/api/users/logged`, config())
    .then(res=>{
      setlogged(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])

  
  const saveStory = ((story)=>{
    axios.post(`https://storytelling-back-end.herokuapp.com/api/stories/save/${story.id}`,{} , config())
    .then(res=>{
      console.log(res, 'posted')
    })
  })

  const edit = e => {
    e.preventDefault()
    axios
    .put(`https://storytelling-back-end.herokuapp.com/api/stories/edit/${story.id}`, editObj, config())
    .then(res => {
      setStory(res.data[0])
      setEditState(false)
    })
  }

  const changeHandler = e => {
    setEditObj({
      ...editObj,
      [e.target.name]: e.target.value
    })
  }

  const cancelEdit = e => {
    setEditState(false)
    setEditObj(story)
  }

  const deleteObj = e => {
    const confirm = window.confirm('Are you sure you want to delete this story?')
    if(confirm == true) {
      axios
      .delete(`https://storytelling-back-end.herokuapp.com/api/stories/delete/${story.id}`, config())
      .then(res => {
        props.history.push('/feed')
      })
    }
  }


  if(!story || !logged)return(<div>Loading...</div>)
  if(!editState){
    return (
      <FullStory>
        <h1>"{story.title}"</h1>
        <h3>A story from {story.country}<br/>by {story.posted_by}</h3>
        <h3><span><Date /></span></h3>
        <StoryContent><p>{story.story}</p></StoryContent>
        <FancyButton>DONATE</FancyButton>
        <FancyButton onClick={()=>{saveStory(story)}}>Save</FancyButton>
        {logged.id === story.user_id ? <FancyButton onClick={() => setEditState(true)}>Edit</FancyButton>: null }
        {logged.id === story.user_id ? <FancyButton onClick={deleteObj}>Delete</FancyButton>: null}
      </FullStory>
    );
  } else {
    return (
      <form onSubmit={edit}>
        <input 
          name='title'
          value={editObj.title}
          onChange={changeHandler}
        />
        <input 
          name='story'
          value={editObj.story}
          onChange={changeHandler}
        />
        <input 
          name='country'
          value={editObj.country}
          onChange={changeHandler}
        />
        <FancyButton type='submit'>Done</FancyButton>
        <FancyButton onClick={cancelEdit}>Cancel</FancyButton>
      </form>
    )
  }
  
}
