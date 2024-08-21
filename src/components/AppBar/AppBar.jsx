import { AppBar as Bar, Box, IconButton, Button, Drawer, Stack, Menu, MenuItem, Fade,

} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";


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
            sx={{width:260, height:1024, backgroundColor:'pink'}}>

            </Drawer>
            <Bar position="fixed" color="primary" sx={{width:1180, height:68}}>
                <Stack direction="row" >
                    <Box>
                    <IconButton aria-label="menu" onClick={useToggle(setOpenSideBar, true)} size='large'>
                       <MenuIcon/>
                    </IconButton>
                    </Box>
                    <Box>
                        <Button 
                        id='theme-button' 
                        onClick={handleClickOnMenu}
                        sx={{color:"pink"}}
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        >Theme
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
                    </Box>
                </Stack>
            </Bar>
        </>
    )
}

export default AppBar;