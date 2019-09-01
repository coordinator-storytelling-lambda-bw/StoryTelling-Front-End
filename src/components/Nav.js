import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import topBarBgImg from '../pattern.png';

const PageTitle = styled.h1`
  font-family: 'Finger Paint', cursive;
  font-size: 3rem;
  color: #faa220;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);
`;
const TopBar = styled.div`
  background-image: url(${topBarBgImg});
  background-repeat: repeat;
  margin-bottom: 10px;
  flex-wrap: wrap;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.8);
`;

const Nav = props => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const logOut = () => {
    localStorage.removeItem('token');
    props.history.push('/')
  };
  return (
    <TopBar className='space'>
      <Link to='/'>
      <PageTitle>StoryTelling</PageTitle>
          </Link>
      {token ? (
        <div className='nav'>
          <Link to='/feed'>
            <button className='nav-link'>Main Feed</button>
          </Link>
          <Link to='/add'>
            <button className='nav-link'>Add Story</button>
          </Link>
          <Link to='/profile'>
            <button className='nav-link'>Profile</button>
          </Link>
          <button className='nav-link' onClick={logOut}>
            Log Out
          </button>
          <span className='welcome'>Welcome {user.username}</span>
        </div>
      ) : (
        <div>
          
        </div>
      )}
      {/* <div className='flex'>
            
            
                {token ? Sign Out</button> : null}
            </div> */}
    </TopBar>
  );
};

export default withRouter(Nav);
