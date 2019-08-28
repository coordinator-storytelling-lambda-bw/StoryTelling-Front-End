import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Date from './Date';

function StoryForm({ errors, touched }) {
  
  

  
  return (
    <Form>
      <div>
        {touched.title && errors.title && <p>{errors.title}</p>}
        <Field type='text' name='title' placeholder='Story Title' />
      </div>

      <div>
        {touched.country && errors.country && <p>{errors.country}</p>}
        <Field name='country' component='select' placeholder='Country'>
          <option value='Select Your Country'>Select Your Country</option>
          <option value='bolivia'>Bolivia</option>
          <option value='brazil'>Brazil</option>
          <option value='cambodia'>Cambodia</option>
          <option value='colombia'>Colombia</option>
          <option value='ecuador'>Ecuador</option>
          <option value='el salvador'>El Salvador</option>
          <option value='ghana'>Ghana</option>
          <option value='guatemala'>Guatemala</option>
          <option value='haiti'>Haiti</option>
          <option value='honduras'>Honduras</option>
          <option value='kiribati'>Kiribati</option>
          <option value='madagascar'>Madagascar</option>
          <option value='mongolia'>Mongolia</option>
          <option value='nicaragua'>Nicaragua</option>
          <option value='paraguay'>Paraguay</option>
          <option value='peru'>Peru</option>
          <option value='philippines'>Philippines</option>
          <option value='sierra leone'>Sierra Leone</option>
          <option value='zimbabwe'>Zimbabwe</option>
        </Field>
      </div>

      <div>
        {touched.description && errors.description && (
          <p>{errors.description}</p>
        )}
        <Field type='text' name='description' placeholder='Story Description' />
      </div>
      <div></div>
      <div>
        {touched.content && errors.content && <p>{errors.content}</p>}
        <Field
          component='textarea'
          name='content'
          placeholder='Story Content'
        />
      </div>
      <div><Date /></div>
      <button>Submit Story</button>
    </Form>
  );
}

const FormikStorySubmitForm = withFormik({
  mapPropsToValues({ title, country, description, content }) {
    return {
      title: title || '',
      country: country || '',
      description: description || '',
      content: content || ''
    };
  },

  validationSchema: Yup.object().shape({
    title: Yup.string().required(),
    country: Yup.string().required(),
    description: Yup.string().required(),
    content: Yup.string().required()
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
    if (values.input !== values.input) {
      setErrors({ username: "That username doesn't exist" });
    } else {
      axios
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        // CHECK API
        .post(
          'https://storytelling-back-end.herokuapp.com/api/auth/STORYSUBMIT',
          values
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          resetForm();
          setSubmitting(false);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
        });
    }
  }
})(StoryForm);
// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API
// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API
// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API// CHECK API

export default FormikStorySubmitForm;

// title country description date