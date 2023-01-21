import './App.css';
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Button } from "@mui/material"
import FormikControl from './components/formikComponents/FormikControl';
// import { useSelector, useDispatch } from 'react-redux'
// import { login } from "../../components/reduxToolkit/features/userSlice"
// import usePasswordToggle from "../../usePasswordToggle"
// import { Stack } from "@mui/system"

function App() {
   //formik part
   const initialValues = {
    email: '',
    age: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
   
  })

  const onSubmit = values => {    //alternatively, i can just destructure this "values" object to directly get the email and password.
    console.log('Form data', values)
    
  }
 


  return (
    
    
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form className="formContainer">

            <div className='formWrapper'>
              <h1 className="signupText">GET PARTY INVITE</h1>
              
              <FormikControl
                control='MuiInput'
                // control='chakraInput'
                type='email'
                label='Email'
                name='email'    //the "name" has to match with the initial value's name above.
                error={Boolean(formik.errors.email) && Boolean(formik.touched.email)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
                helperText={Boolean(formik.touched.email) && formik.errors.email} //if "formik.touched.email" is true, then display the "formik.errors" associated with the "email".
              />
              
              {/* <FormikControl
                control='MuiSelect'
                type='select'
                label='Age'
                name='age'    //the "name" has to match with the initial value's name above.
                error={Boolean(formik.errors.email) && Boolean(formik.touched.email)} //if both "formik.errors" and "formik.touched" are true, then the "error" prop is true.
                helperText={Boolean(formik.touched.email) && formik.errors.email} //if "formik.touched.email" is true, then display the "formik.errors" associated with the "email".
              /> */}

              
              {/* <button type='submit' disabled={!formik.isValid} className={style.btn}>Sign Up</button> "formik.isValid is false whenever there is an error" */}
              <img src="https://media0.giphy.com/media/wSv0sqJI7uoqSBPbNc/giphy.gif?cid=790b76111bb243114349dcfa1792a8bb589e9a948d973027&rid=giphy.gif&ct=g" alt="dancing" className='danceBtn'/>
            </div>

          </Form>
        )
      }}
    </Formik>
    
  )
}

export default App;
