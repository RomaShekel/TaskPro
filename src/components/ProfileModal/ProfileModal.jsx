import { Modal, Box, TextField, Button, IconButton, Typography, useTheme } from "@mui/material";
import css from './ProfileModal.module.css'
import { RxCross2 } from "react-icons/rx";
import { AddAPhoto, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors.js";
import { Form, Formik, Field } from "formik";
import { changeUser } from '../../redux/user/slice.js'

const ProfileModal = ({open, setOpen}) => {

const user = useSelector(userSelector);
const dispatch = useDispatch()

const [showPassword, setShowPassword] = useState(false)
const [focusPwd, setFocusPwd] = useState(false)

    const submitValues = (payload) => {
        dispatch(changeUser(payload))
    }

    const showPsw = () => {
        setShowPassword(!showPassword);
        setFocusPwd(!focusPwd);
    }

    return(
        <>
        <Modal
        className={css.modal}
        open={open}
        onClose={() => setOpen(false)}>
            <Box className={css.modalBox}>
                <Box>
                    <Typography
                    variant="h6"
                    className={css.title}
                    >
                        Edit profile
                    </Typography>
                </Box>

                <Button
                className={css.exitIconBtn}
                onClick={() => setOpen(false)}
                >
                    <RxCross2 className={css.exitIcon}/>
                </Button>
                
                <Formik
                initialValues={user}
                onSubmit={submitValues}>
                    <Form
                    className={css.formBox}>

                <Box className={css.photoBox}>
                    <Box sx={{width:68, height:68}}>
                    <img width="68px" height="68px" src='./src/images/plant.png'></img>
                    </Box>

                    <Button
                    className={css.photoBtn}
                    component='label'>

                        <AddAPhoto/>
                            <Field
                            name="photo" 
                            type="file" 
                            value=''
                            hidden={true}
                            />

                    </Button>
                </Box>

                <Box className={css.inputs}>
                        <Field
                        name="name"
                        />
                        <Field
                        name="email"
                        type="email"
                        />

                       <Box className={css.pwdInput}>
                        <Field
                            className={css.pwdInput}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            focused='true'
                            />
                                
                            <IconButton className={css.pswBtn}
                            onClick={(e) => showPsw(e)}
                            edge="end"
                            size="small">
                                {showPassword? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                       </Box>

                        <Button
                        className={css.submitBtn}
                        type="submit"
                        variant="contained"
                        >
                        Send
                        </Button>
                    
                </Box>
                    </Form>
                </Formik>

            </Box>
        </Modal>
        </>
    )

}
export default ProfileModal