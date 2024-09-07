
import { Typography, Box, Button } from "@mui/material";
import { CiFilter } from "react-icons/ci";
import AppBar from "../AppBar/AppBar.jsx";
import css from './BoardPage.module.css'
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoginSelector } from '../../redux/selectors.js'
import { Columns } from "../Columns/Columns.jsx";

const BoardPage = () => {
    const navigate = useNavigate()
    const isLogin = useSelector(isLoginSelector)
    useEffect(() => {
      isLogin ? navigate('/board') : navigate('/')
    },[isLogin, navigate])
    return(
        <>
        <AppBar/>
        <Box className={css.boardHead}>
            <Typography variant="p">Board Name</Typography>
            <Button><CiFilter /> Filters</Button>
        </Box>

        <Box className={css.columnsBox}>
        <Columns/>
        <Columns/>
        <Columns/>
        <Columns/>
        <Columns/>
        <Columns/>
        </Box>
        </>
    )
}

export default BoardPage;