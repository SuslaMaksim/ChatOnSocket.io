import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    letterBox:{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: "30px",

    },
    letter:{
        padding: '5px 10px',
        backgroundColor: '#66b3ff',
        color: 'white',
        borderRadius: '12px',
        position: 'relative',
        wordBreak: 'break-word',
        marginRight: '20px'

    },
    nameLetter: {
        position: 'absolute',
        backgroundColor: '#944dff',
        right: '-10px',
        bottom: '-15px',
        borderRadius: '8px',
        padding: '2px 5px',
        fontSize: '10px',
    }
}))




const Letter = ({text,name})=>{
    const classes = useStyles()
    return(

        <Box component='div' className={classes.letterBox}>
            <Typography className={classes.letter}>{text}
                <Box component='span' className={classes.nameLetter}>{name}</Box>
            </Typography>
        </Box>
    )
}

export default Letter;