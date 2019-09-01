import React, { useState, useEffect } from 'react';
import Date from './Date';
import axios from 'axios';
import config from './AxiosConfig'
// import styled from 'styled-components';

// const StoryBox = styled.div` 
// background-color: #14b1ab;
// max-width: 350px;
// padding: 20px;
// box-shadow: 2px 2px 4px 0px rgba(0,0,0,1);
// h1 {
//   color: #faa220;
//   background-color: #3a3480;
//   border-radius: 10px;
//   padding-bottom: 5px;
//   text-shadow: 1px 1px 3px black;
//   box-shadow: 2px 2px 4px 0px rgba(0,0,0,1);
// }
// h2 {
//   color: #C0326A;
//   text-shadow: 1px 1px 1px black;
//   margin-top: -10px;
// }
// h3 {
//   color: #FAA220;
//   background-color: #3a3480;
//   border-radius: 10px;
//   padding-bottom: 5px;
//   text-shadow: 2px 1px 1px black;
//   box-shadow: 2px 2px 4px 0px rgba(0,0,0,1);
// }
// h3 span {
//   color: white;
//   background-color: none;
// }
// p {
//   background-color: white;
//   border-radius: 5px;
// }

// `

export default function Story(props) {
  const [story, setStory] = useState();
  const [editObj, setEditObj] = useState()
  const [editState, setEditState] = useState(false)
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
    const confirm = window.confirm('Are you sure you want to delet this story?')
    if(confirm == true) {
      axios
      .delete(`https://storytelling-back-end.herokuapp.com/api/stories/delete/${story.id}`, config())
      .then(res => {
        props.history.push('/feed')
      })
    }
  }


  if(!story)return(<div>Loading...</div>)
  if(!editState){
    return (
      <div>
        <h1>{story.title}</h1>
        <h3>from {story.country}</h3>
        <h3><span><Date /></span></h3>
        <p>{story.story}</p>
        <button>DONATE</button>
        <button onClick={()=>{saveStory(story)}}>Save</button>
        <button onClick={() => setEditState(true)}>Edit</button>
        <button onClick={deleteObj}>Delete</button>
      </div>
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
        <button type='submit'>Done</button>
        <button onClick={cancelEdit}>Cancel</button>
      </form>
    )
  }
  
}
