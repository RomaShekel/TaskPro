import { Modal, Box } from "@mui/material";
import css from './ProfileModal.module.css'
const ProfileModal = ({open, setOpen}) => {

    return(
        <>
        <Modal
        open={open}
        onClose={() => setOpen(false)}>
            <Box className={css.modalBox}></Box>
        </Modal>
        </>
    )

}
export default ProfileModal