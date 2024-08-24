import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import css from './ProfileModal.module.css'
import { BiCross } from "react-icons/bi";
import { AddAPhoto } from "@mui/icons-material";
import { useState } from "react";
const ProfileModal = ({open, setOpen}) => {

    const [ values, setValues ] = useState({
        name: '',
        email: '',
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

    return(
        <>
        <Modal
        open={open}
        onClose={() => setOpen(false)}>
            <Box className={css.modalBox}>
                <Box>
                    <Typography variant="h4">Edit profile</Typography>
                </Box>

                <Button
                onClick={() => setOpen(false)}
                >
                    <BiCross/>
                </Button>
                
                <Box>
                    <Box>
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
                    onSubmit={(e) => submitValues(e)}>
                        <TextField
                        name="name"
                        value={values.name}
                        onChange={(e) => changeValues(e)}/>
                        <TextField
                        name="email"
                        value={values.email}
                        onChange={(e) => changeValues(e)}/>
                        <TextField
                        name="password"
                        value={values.password}
                        onChange={(e) => changeValues(e)}/>

                        <Button
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