import React, { useContext } from 'react'
import { useState } from 'react'

import './UserForm.css'
import Navbar from './Navbar'
import FormContext from '../UseContext'
import {useNavigate} from 'react-router-dom'



export default function UserForm() {

    let {userData,setUserData}=useContext(FormContext)
    let navigate=useNavigate()

    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        dob: '',
        email: '',
        salary: '',
        gender: '',
      })


    //   add data to formdata on onchange action
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

        console.log(formData);
      };



    //   submit button

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Validate each field
    if (formData.id.trim() === '') {
      validationErrors.id = 'Please enter an ID';
    }
    if (formData.name.trim() === '') {
      validationErrors.name = 'Please enter a name';
    }
    if (formData.dob.trim() === '') {
      validationErrors.dob = 'Please enter a date of birth';
    }
    if (formData.email.trim() === '') {
      validationErrors.email = 'Please enter an email';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email';
    }
    if (formData.salary.trim() === '') {
      validationErrors.salary = 'Please enter a salary';
    } else if (isNaN(formData.salary)) {
      validationErrors.salary = 'Please enter a valid salary';
    }
    if (formData.gender === '') {
      validationErrors.gender = 'Please select a gender';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
     setUserData((prevData) => [...prevData, formData]);
     console.log('user',userData);
     navigate('/users')
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if  (emailPattern.test(email)){
        return true;
    }
    
  };


  return (
    <>
        <Navbar/>

    <div className='form-main'>
      <div className="form-inner">
        <h3 className='text-center'>Add user</h3>
        <div className="form-box">

            {/* form creation */}
            <form action='' onSubmit={handleSubmit}>
                <input type="text" name='id' placeholder='Id' className="inp" onChange={handleChange} /><br />
                {errors.dob && <span className="error">{errors.id}</span>}
                <input type="text" name='name' placeholder='Name' className="inp"  onChange={handleChange}/><br />
                {errors.dob && <span className="error">{errors.name}</span>}
                <input type="date" name='dob' placeholder='Date of birth' className="inp"  onChange={handleChange}/><br />
                {errors.dob && <span className="error">{errors.dob}</span>}
                <input type="email" name='email' placeholder='Email' className="inp"  onChange={handleChange}/><br />
                {errors.dob && <span className="error">{errors.email}</span>}
                <input type="text" name='salary' placeholder='Salary' className="inp" onChange={handleChange} /><br />
                {errors.dob && <span className="error">{errors.salary}</span>}
                <br/>
                <input type="radio" name='gender' placeholder='Gender' value='male' className="radio" onChange={handleChange} /><label htmlFor="">Male</label>
                <input type="radio" name='gender' placeholder='Gender' value='female'   className="radio" onChange={handleChange} /><label htmlFor="">FeMale</label>
                <input type="radio" name='gender' placeholder='Gender' value='other' className="radio" onChange={handleChange} /><label htmlFor="">Other</label>
                <br />
                {errors.dob && <span className="error">{errors.gender}</span>} 
                <br />
                <input type="submit" placeholder='Gender' className="inp" /><br />

            </form>

        </div>
      </div>
    </div>
    </>
  )
}
