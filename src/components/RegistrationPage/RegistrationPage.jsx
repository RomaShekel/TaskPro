import { Box, Button } from "@mui/material";
import css from './RegistrationPage.module.css';
import { Formik, Form, Field } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const RegistrationPage = ({login = false}) => {
    const navigate = useNavigate()
    const [showPwd, setShowPwd] = useState(false);
    const [ isLoginPage, setIsLoginPage] = useState(login);
    const [ initialValues, setInitialValues ] = useState({
        name: '',
        email: '',
        password:'',
    })

    useEffect(() => {
        setInitialValues(
        {
            email: '',
            password: '',
            name: '',
        }
        )
    }, [isLoginPage])

    const handleChangeIsLoginPage = (boolean) => {
        setIsLoginPage(boolean);
        boolean ? navigate('/login') : navigate('/signup');
    }

    const handleSubmit = (values, action) => {
        console.log(values)
        action.resetForm()
    }


    return(
        <Box className={isLoginPage ? css.mainLoginBox : css.mainBox}>
            <Box className={css.loginBtnBox}>
                <Button
                className={ isLoginPage ? [css.loginAndRegisterBtn, css.isThisPage] : css.loginAndRegisterBtn}
                onClick={() => handleChangeIsLoginPage(false)}
                >Registration
                </Button>
                <Button
                className={ !isLoginPage ? [css.loginAndRegisterBtn, css.isThisPage] : css.loginAndRegisterBtn}
                onClick={() => handleChangeIsLoginPage(true)}
                >Log in
                </Button>
            </Box>
            <Box>
                <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validateOnChange={true}
                >
                   <Form className={css.inputBox}>

                        {isLoginPage ? null : 
                        <Field
                        value={initialValues.name}
                        onChange={(e) => setInitialValues({...initialValues, name:e.target.value})}
                        className={css.input}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        />}

                        <Field
                        className={css.input}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        />

                        <Box sx={{position: 'relative'}}>
                            <Field
                            className={css.input}
                            type={showPwd ? "text" : "password"}
                            name="password"
                            placeholder="Create a password"
                            />
                            <Box
                            onClick={() => setShowPwd(!showPwd)}>
                            {showPwd ? <Visibility className={css.visibility}/>
                             : <VisibilityOff className={css.visibility}/>}
                            </Box>
                        </Box>

                        <Button 
                        className={css.sendBtn}
                        type="submit"
                        >Register Now
                        </Button>
                   </Form>
                </Formik>
            </Box>
        </Box>
    )
}

export default RegistrationPage