import React, {useState} from 'react';
import axios from 'axios';

const SignUp = ()=>{
    const [object, setObject] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        email: '',
        type: ''
    });
    const submitHandle = (event) =>{
        setObject({
            ...object, [event.target.name]: event.target.value
        })
    }
    const submit = (event)=>{
        event.preventDefault();
        axios.post('https://storytelling-back-end.herokuapp.com/api/auth/register', object)
        .then((res)=>{
            console.log(res)
        })
    }
    return (
        
        <div className='form-box'>
            <div className='sign-up-header'>Sign Up</div>
            <form onSubmit={submit}>
                <input onChange={submitHandle} className='signUpField'component='input' type='username' name='username' placeholder='Create Username'/>
                <input  onChange={submitHandle} className='signUpField' component='input' type='password' name='password' placeholder='Create Password'/>
                <input  onChange={submitHandle} className='signUpField' component='input' type='text' name='firstName' placeholder='First Name'/>
                <input  onChange={submitHandle} className='signUpField' component='input' type='text' name='lastName' placeholder='Last Name'/>
                <select  onChange={submitHandle} className='signUpField' component='select' name='country'>
                    <option>Country</option>
                    <option value='Bolivia'>Bolivia</option>
                    <option value='Brazil'>Brazil</option>
                    <option value='Cambodia'>Cambodia</option>
                    <option value='Colombia'>Colombia</option>
                    <option value='Ecuador'>Ecuador</option>
                    <option value='El Salvador'>El Salvador</option>
                    <option value='Ghana'> Ghana</option>
                    <option value='Guatemala'>Guatemala</option>
                    <option value='Haiti'>Haiti</option>
                    <option value='Honduras'>Honduras</option>
                    <option value='Kiribati'>Kiribati</option>
                    <option value='Madagascar'>Madagascar</option>
                    <option value='Mongolia'>Mongolia</option>
                    <option value='Nicaragua'>Nicaragua</option>
                    <option value='Paraguay'>Paraguay</option>
                    <option value='Peru'>Peru</option>
                    <option value='Philippines'>Philippines</option>
                    <option value='Sierra Leone'>Sierra Leone</option>
                    <option value='Zimbabwe'>Zimbabwe</option>
                </select>
                <select  onChange={submitHandle}  className='signUpField' component='select' name='type'>
                    <option>Select a User Type</option>
                    <option value='coordinator'>Coordinator</option>
                    <option value='donor'>donor</option>
                </select>
                <input onChange={submitHandle} className={object.type==='coordinator'?'signUpField':'none'} component='input' type='text' name='workTitle' placeholder='Position in Organization'/>
                <input onChange={submitHandle} className='signUpField' component='input' type='email' name='email' placeholder='Email'/>
                <button className='signUpField submit'>Submit</button>
            </form>
        </div>    
    )
}

export default SignUp;