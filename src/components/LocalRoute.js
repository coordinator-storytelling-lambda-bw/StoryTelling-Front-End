import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const LocalRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => localStorage.getItem('token') ? (<Redirect to="/feed" />) : (<Component {...props} />) } />
  );
};
export default LocalRoute