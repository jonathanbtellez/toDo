import React from 'react';

//importando formit para crear los formularios
import { Formik, Field, Form, ErrorMessage } from 'formik';

//importando formit para validar los formularios
import * as Yup from 'yup';
/**
 * Usando la libreria formit que nos permite crear componentes en react
 * Ejemplo de creacion de formularioS
 */

// uando Yup para hacer la validacion del formulario

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
})


const LoginFormik = () => {

    const initialCredentials = {
        email: "",
        password: ""
    }

    return (
        <div>
            <h4>
                Login Formik
            </h4>
            <Formik
                //configuracion inicial de formik
                //initial values that the form will take
                initialValues={initialCredentials}

                // Aplicando el loginSchema creado con Yup
                validationSchema={loginSchema}

                // Onsubmit event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));

                    // We save the data in the localstorage
                    localStorage.setItem('credential', values);
                }}
            >

                {/* optimizing how we obtain props from formit 
                way 2*/}
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />

                        {/* Email errors */}
                        {
                            errors.email && touched.email &&
                            (
                                // Way 1
                                // <div className='error'>
                                //     <p>{errors.email}</p>
                                // </div>

                                <ErrorMessage name="email" component="div"></ErrorMessage>

                            )
                        }

                        <label htmlFor="password">Password</label>
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


                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}

                {/* We obtain props from formik
                 way 1*/}
                {/* {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props;

                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />

                            Email errors
                            {
                                errors.email && touched.email &&
                                (
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                            />
                            
                            Password errors
                            {
                                errors.password && touched.password &&
                                (
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                )
                            }


                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>):null}
                        </Form>
                    )

                }} */}


            </Formik>
        </div>
    )
}

export default LoginFormik;
