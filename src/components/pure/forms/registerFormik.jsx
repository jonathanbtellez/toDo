import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// models
import { User } from "../../../models/user.class";
import { ROLES } from '../../../models/roles.enum';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterFormik = () => {

    // let user = new User();

    // const submit = (values) => {
    //     alert(console.log('register user'))
    // }

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Name too short')
            .max(12, 'Username too long')
            .required('Username is required'),

        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),

        role: Yup.string().oneOf(
            [ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin'
        )
            .required('Role is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password too short'),
        confirm: Yup.string()
            .when('password', {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    '¡Password must match!'
                )
            }).required('You must confirm the password'),
    })

    const navigate = useNavigate();

    return (
        <div className='d-flex flex-column'>
            <h4 className='text-center'>Register Formik</h4>
            <Formik
                initialValues={initialValues}

                // Aplicando el loginSchema creado con Yup
                validationSchema={registerSchema}

                // Onsubmit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    navigate('/login');
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form className='d-flex justify-content-center flex-column'> 
                        
                        <label htmlFor="username">Username: </label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="Username"
                            type="text"
                        />

                        {/* Username errors */}
                        {errors.username && touched.username &&
                            (
                                // Way 1
                                // <div className='error'>
                                //     <p>{errors.email}</p>
                                // </div>

                                <ErrorMessage name="username" component="div"></ErrorMessage>

                            )
                        }

                        <label htmlFor="email">Email: </label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />

                        {/* Email errors */}
                        {errors.email && touched.email &&
                            (
                                // Way 1
                                // <div className='error'>
                                //     <p>{errors.email}</p>
                                // </div>

                                <ErrorMessage name="email" component="div"></ErrorMessage>

                            )
                        }

                        <label htmlFor="password">Password: </label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        {/* Password errors */}
                        {
                            errors.password && touched.password &&
                            (
                                // Way 1
                                // <div className='error'>
                                //     <p>{errors.password}</p>
                                // </div>
                                <div>
                                    <ErrorMessage name="password" component="div"></ErrorMessage>
                                </div>
                            )
                        }

                        <label htmlFor="confirm">Confirm your password: </label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm your password"
                            type="password"
                        />

                        {/* confirm errors */}
                        {
                            errors.confirm && touched.password && 
                            (
                                // Way 1
                                // <div className='error'>
                                //     <p>{errors.password}</p>
                                // </div>
                                <div>
                                    <ErrorMessage name="confirm" component="div"></ErrorMessage>
                                </div>
                            )
                        }


                        <Button type="submit" color='success' variant='contained' className='my-3'>Register Account</Button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}                        
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
