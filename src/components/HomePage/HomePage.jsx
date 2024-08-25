import { Box, Button, Typography } from "@mui/material"
import { PiLightningFill } from "react-icons/pi";
import css from "./HomePage.module.css"

const HomePage = () => {
    return(
       <Box className={css.homeBox}
       >
            <img src="../../images/boy.png" />
            <Box className={css.iconBox}>
                <Box>
                    <PiLightningFill/>
                </Box>
                <Typography variant="p">Task Pro</Typography>
            </Box>

            <Typography variant="p" className={css.descriptionBox}>
            Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!
            </Typography>

            <Box className={css.buttonBox}>
                <Button className={css.regBtn}>Registration</Button>
                <Button className={css.loginBtn}>Log in</Button>
            </Box>
       </Box>
    )
}

export default HomePage