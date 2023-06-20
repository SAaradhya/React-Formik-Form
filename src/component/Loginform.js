import React from 'react';
import { useState } from 'react'; //importing useStatehook to initialize & store value
import * as Yup from 'yup'; // is ValidationSchema for Formik
import {Formik,Form,Field} from 'formik';//Formik help to create form with advance functionality.
import { useNavigate } from 'react-router-dom';
import login from './login.json';



export default function Loginform(){


    let navigate = useNavigate();

    //create state and initialize value for form
    const [initialval,setInitial] = useState({
        email:"",
        password:""
          });


        //   ***//
        // explain onclick events
          function submitForm(value){
            // console.log(value)
            if(login.email === value.email && login.password === value.password){
              navigate("/ValidAccess", true)
              console.log(`  This is user's email: ${value.email} and user's Password: ${value.password}`)
            }
        else{
            navigate("/NotFound",true)
            console.log(`  This is user's email :  ${value.email}  and user's Password  : ${value.password}`)
            
        }
    }
    
//Create validation 
    const LoginSchema = Yup.object().shape({
        email:Yup.string()
        .required("Email is required !")
        .email("Invalid Email"),
        password:Yup.string()
        .required("Password is required !")
        .min(8,"password should not be less than 8 character")
        .max(35,"password is too long !")
        .matches(/^(?=.*[a-z])/, "Password must contain atleast a lowercase character")
        .matches(/^(?=.*[A-Z])/, "Password must contain atleast a uppercase character")
        .matches(/^(?=.*[0-9])/, "Password must contain at least a number")
    });

    return(
        <div className ='main-form'>
            <Formik initialValues={initialval} validationSchema={LoginSchema} onSubmit={submitForm}>
                {/*provide initialvalue through state in Formik'attribute initialValues with curly braces
                   provide validation through yup in Formik'attribute validationSchema with curly braces
                   provide submitForm  onclick event in Formik'onSubmit attribute with curly braces*/}
                   {
                    // here we are wrapping the Formik Field component in arrow function & passing props who will track and bind 
                    // - the state values and Field value
                    ({errors}) => (
                        <Form className='login-form' >
                            <h2>ReactFormikForm</h2>
                            <div className='form'>
                               <label>Email:</label>
                               <Field type ="email" name ="email" placeholder ="Enter your email"  className="form-fieldz"></Field>
                               {errors.email}
                            </div>
                            <div className='form'>
                                <label>Password:</label>
                                <Field type ="password" name = "password" placeholder = "Enter your Password"></Field>
                                {errors.password}
                            </div>
                            <div className='form'>
                          <input type="submit" className='sign-in' value="submit"  />

                            </div>
                        </Form>

                    )
                   }

                
            </Formik> 
        </div>
    )
}
