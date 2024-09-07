import { Box, Button, TextField } from "@mui/material"
import css from './Columns.module.css'
import { Card } from "../Card/Card.jsx"

export const Columns = () => {

    return (
        <Box>
            <TextField variant="outlined" label="Inputs" className={css.input}/>
            <Box className={css.cardsBox}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>


            </Box>
            <Button variant="contained">Add another card</Button>
        </Box>
    )
}