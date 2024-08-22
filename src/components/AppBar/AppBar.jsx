import { AppBar as Bar, Box, IconButton, Button, Drawer, Stack, Menu, MenuItem, Fade,
    Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiLightningFill } from "react-icons/pi";
import css from './AppBar.module.css';

const AppBar = () => {

    const [openSideBar, setOpenSideBar] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClickOnMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    const useToggle = (setFunction, newOpen) => () => {
        setFunction(newOpen);
    };

    return (
        <>
            <Drawer 
            open={openSideBar} 
            onClose={useToggle(setOpenSideBar, false)} 
            color="primary"
            >
                <Box className={css.drawerBox}>
                    <Box className={css.typographyDrawerLogoBox}>
                    <Typography className={css.typographyDrawerLogo}>
                        <PiLightningFill className={css.iconBolt} width={32}/> Task Pro
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
            <Bar 
            position="fixed"
            color="secondary" 
            className={css.appBar}>
                <Stack 
                direction="row" 
                className={css.stack}
                >
                    <Box>
                    <IconButton aria-label="menu" onClick={useToggle(setOpenSideBar, true)} size='large'>
                       <MenuIcon/>
                    </IconButton>
                    </Box>
                    <Box className={css.profileBox}>
                        <Button 
                        id='theme-button' 
                        onClick={handleClickOnMenu}
                        className={css.themeBtn}
                        color="primary"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        >
                        <Typography 
                        className={css.themeBtn}
                        textTransform={"none"}>Theme <IoIosArrowDown/></Typography>
                        </Button>
                        <Menu
                        id='theme-menu'
                        open={openMenu}
                        anchorEl={anchorEl}
                        onClose={handleCloseMenu}
                        TransitionComponent={Fade}
                        MenuListProps={{
                            'aria-labelledby': 'theme-button',
                          }}
                         >
                            <MenuItem onClick={handleCloseMenu}>Light</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Dark</MenuItem>
                            <MenuItem onClick={handleCloseMenu}>Violet</MenuItem>
                        </Menu>
                        <Box>
                        <Button 
                        className={css.profileBtn}
                        color="primary">
                            <Typography 
                            variant="button" 
                            textTransform={'none'}
                            sx={{mr:'5px'}}>User</Typography>
                            <img width={32} height={32}/>
                        </Button>
                        </Box>
                    </Box>
                </Stack>
            </Bar>
        </>
    )
}

export default AppBar;