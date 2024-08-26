import { Box, Button, Typography } from "@mui/material"
import { PiLightningFill } from "react-icons/pi";
import css from "./HomePage.module.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
const navigate = useNavigate();

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
                <Button 
                className={css.regBtn}
                onClick={() => navigate('/signup')}
                >Registration</Button>
                <Button 
                className={css.loginBtn}
                onClick={() => navigate('/login')}
                >Log in</Button>
            </Box>
       </Box>
    )
}

export default HomePage