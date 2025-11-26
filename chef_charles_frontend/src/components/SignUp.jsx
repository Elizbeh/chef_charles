import React from 'react'
import './SignUp.css'

const SignUp = () => {

  
  const register = (formData) => {
   const data = Object.fromEntries(formData)
   const employmentStatus = formData.get("employment-status")
  

   const allData = {
    ...data,
    employmentStatus
   }
   console.log(allData)

  }

  return (
    <section className='formSec'>
      <div className="formCon">
        <h1>Signup Form</h1>
        <form action={register}>
          <label  htmlFor="firstname">Firstname :</label>
          <input type="text" name="firstname" id="firstname"  placeholder='Joe'/>
          <label htmlFor="lastname">Lastname :</label>
          <input type="text" name="lastname" id="lastname" placeholder='Smart' />
          <label htmlFor="password">Password :</label>
          <input type="password" name="password" id="password" placeholder='******' />
          <label htmlFor="description">Description :</label>
          <textarea id='description'name='description' rows={4} cols={28}  placeholder='Description text...'></textarea>
          <fieldset>
            <legend>Employment status</legend>
            <input type="radio" name='employment-status' value="unemployed" id='unemployed' />
            <label htmlFor="unemployed">Unemployed</label><br />
            <input type="radio"  name='employment-status'  value="partime" id='partime' />
            <label htmlFor="partime">Partime</label><br />
            <input type="radio" name='employment-status' value="fulltime" id='fulltime' />
            <label htmlFor="fulltime">Fulltime</label><br />
          </fieldset>
          <button id='btn'>Register</button>
        </form>
      </div>
    </section>
  )
}

export default SignUp