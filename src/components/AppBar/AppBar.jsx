import { AppBar as Bar, Box, IconButton, Button, Drawer, Stack, Menu, MenuItem, Fade,
    Typography,
    Avatar,
    Divider,
} from "@mui/material";
import { Menu as MenuIcon, Add } from "@mui/icons-material";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { PiLightningFill } from "react-icons/pi";
import { GrCircleQuestion } from "react-icons/gr";
import css from './AppBar.module.css';
import ProfileModal from "../ProfileModal/ProfileModal";

const AppBar = () => {

    const [profileModal, setProfileModal] = useState(false)
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
              sx={{
                '& .MuiDrawer-paper': {
                  overflow: 'hidden', 
                }}}
            open={openSideBar} 
            onClose={useToggle(setOpenSideBar, false)} 
            color="primary"
            >
                <Box className={css.drawerBox}>
                    <Box>
                        <Box className={css.typographyDrawerLogoBox}>
                        <Typography className={css.typographyDrawerLogo}>
                            <PiLightningFill className={css.iconBolt} width={32}/> Task Pro
                            </Typography>
                        </Box>
                        <Box className={css.typographyDrawerAdd}>
                            <Typography variant="body2" sx={{color: 'var(--primary-color-transparent)'}}>My Boards</Typography>
                            <Divider></Divider>
                            <Box className={css.createBoardBox}>
                                <Box sx={{width:80}}>
                                    <Typography>Create a new board</Typography>
                                </Box>
                                <Button className={css.addBoardButton}><Add width='20px' sx={{display:'flex'}}/></Button>
                            </Box>
                            <Divider/>
                        </Box>  
                    </Box>
                    <Box>
                        <Box className={css.supportBox}>
                            <img width='54px' src='./src/images/plant.png'/>
                            <p className={css.textColor}>
                                If you need help with <span className={css.spanColor}>TaskPro</span>, check out our support resources or reach out to our customer support team.
                            </p>
                            <a className={css.textColor}> <GrCircleQuestion width={20} />  Need help?</a>
                        </Box>
                        <Button className={css.logoutButton}><HiOutlineLogout className={css.logoutIcon}/> Log out</Button>
                    </Box>
                </Box>
            </Drawer>
            <Bar 
            position="static"
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
                        onClick={() => setProfileModal(true)}
                        color="primary">
                            <Typography 
                            variant="button" 
                            textTransform={'none'}
                            sx={{mr:'5px'}}>User</Typography>
                            <Avatar variant="rounded" className={css.avatar} sizes="sm"/>
                        </Button>
                        <ProfileModal open={profileModal} setOpen={setProfileModal}/>
                        </Box>
                    </Box>
                </Stack>
            </Bar>
        </>
    )
}

export default AppBar;