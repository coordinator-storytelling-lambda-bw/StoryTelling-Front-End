import React from 'react';
import { useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { withRouter } from 'react-router-dom'


function LoginForm({ errors, touched, history }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Username' />
      </div>
      <div>
        <Field type='password' name='password' placeholder='Password' />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button className = "btn-3">Log In</button>
      
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, history}) {
    return {
      username: username || '',
      password: password || '',
      history: history
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(values);
    console.log(values.history, 'history')

    axios
      .post(
        'https://storytelling-back-end.herokuapp.com/api/auth/login',
        values
        
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify({username: values.username}));
        resetForm();
        setSubmitting(false);
        values.history.push('/feed')
      })
      .catch((err) => {
        console.log(err, 'hi');
        alert("Username and/or password not found")
        setSubmitting(false);
      });
  }
})(LoginForm);

export default withRouter(FormikLoginForm)