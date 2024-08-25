import { Modal, Box, TextField, Button, IconButton, Typography, useTheme } from "@mui/material";
import css from './ProfileModal.module.css'
import { RxCross2 } from "react-icons/rx";
import { AddAPhoto, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const ProfileModal = ({open, setOpen}) => {
// const theme = useTheme()

const [showPassword, setShowPassword] = useState(false)
const [focusPwd, setFocusPwd] = useState(false)

    const [ values, setValues ] = useState({
        name: 'Зоя',
        email: 'ehi@gmail.com',
        password: '',
        photo: '',
    })

    const changeValues = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const submitValues = (evt) => {
        evt.preventDefault()
        console.log(values)
        setValues({
            ...values,
            photo: ''
        })
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
                
                <Box sx={{margin: 'auto'}}>
                    <Box sx={{backgroundImage: values.photo}}>
                    </Box>
                    <Button
                    component='label'>

                        <AddAPhoto/>
                        <input 
                    name="photo" 
                    type="file" 
                    hidden={true}
                    value={values.photo}
                    onChange={(e) => changeValues(e)}/>

                    </Button>
                </Box>

                <Box>
                    <form
                    className={css.formBox}
                    onSubmit={(e) => submitValues(e)}>
                        <TextField
                        name="name"
                        value={values.name}
                        onChange={(e) => changeValues(e)}/>
                        <TextField
                        name="email"
                        value={values.email}
                        onChange={(e) => changeValues(e)}/>

                       <Box className={css.pwdInput}>
                        <TextField
                            className={css.pwdInput}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            position="end"
                            value={values.password}
                            onChange={(e) => changeValues(e)}
                            focused={true}
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
                    </form>
                </Box>

            </Box>
        </Modal>
        </>
    )

}
export default ProfileModal