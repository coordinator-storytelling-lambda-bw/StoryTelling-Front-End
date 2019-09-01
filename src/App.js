import React from 'react';
import { Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute.js'
import LocalRoute from './components/LocalRoute.js'
import StoryForm from './components/StoryForm';
import LogIn from './components/Login';
import ProfilePage from './components/ProfilePage.js'
import SignUp from './components/SignUp.js';
import HomePage from './components/HomePage';
import Nav from './components/Nav.js';
import Feed from './components/Feed.js';
import Story from './components/Story.js';

function App() {
  return (
    <div className="App">
        {/* <StoryForm/> */}
        <Route path='/' component={Nav} />
        <LocalRoute exact path='/signup' component={SignUp}/>
        <LocalRoute exact path='/login' component={LogIn} />
        <LocalRoute exact path='/' component={HomePage}/>
        <PrivateRoute exact path='/feed' component={Feed} />
        <PrivateRoute exact path='/feed/:id' component={Story}/>
        <PrivateRoute exact path='/profile' component={ProfilePage} />
        <PrivateRoute exact path='/add' component={StoryForm} />
    </div>
  );
}

export default App;
