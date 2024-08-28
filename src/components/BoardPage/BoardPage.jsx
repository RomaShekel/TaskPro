
import { Typography, Box, Button } from "@mui/material";
import { CiFilter } from "react-icons/ci";
import AppBar from "../AppBar/AppBar.jsx";
import css from './BoardPage.module.css'

const BoardPage = () => {
    return(
        <>
        <AppBar/>
        <Box className={css.boardHead}>
            <Typography variant="p">Board Name</Typography>
            <Button><CiFilter /> Filters</Button>
        </Box>
        </>
    )
}

export default BoardPage;