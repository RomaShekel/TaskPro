import { Box, Button } from "@mui/material";
import css from './RegistrationPage.module.css';
import { Formik, Form, Field } from "formik";
import { useState } from "react";
const RegistrationPage = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password:'',
    })

    const handleChange = (e) =>  {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return(
        <Box className={css.mainBox}>
            <Box>
                <Button>Registration</Button>
                <Button>Log in</Button>
            </Box>
            <Box>
                <Formik
                initialValues={values}
                onSubmit={(e) => handleSubmit(e)}
                validateOnChange={true}
                >
                   <Form>
                        <Field
                        type="text"
                        name="name"
                        />
                        <Field
                        type="email"
                        name="email"
                        />
                        <Field
                        type="password"
                        name="password"
                        />
                        <Button type="submit">Register Now</Button>
                   </Form>
                </Formik>
            </Box>
        </Box>
    )
}

export default RegistrationPage