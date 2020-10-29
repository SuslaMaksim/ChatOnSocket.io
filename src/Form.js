
import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    form:{
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: '#33ccff',
        margin: '20px 10px 0px 0px',
        padding: '5px 10px',
        color: 'white',
        "&:hover":{
            backgroundColor: '#33ccff'
        }
    }


}))

const Form = ({addMessage})=>{
    const classes = useStyles();
    let[message,setMessage] = useState('')

    let setMessageToServer =()=>{
        addMessage(message)
        setMessage('')
    }

    return(
        <Box component='form' className={classes.form}>
            <TextField
                value = {message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter Messagee"
                rows={4}
                multiline
                variant="outlined"
            />
            <Box component='div' className={classes.buttonContainer}>
                <Button onClick={setMessageToServer} className={classes.button}> Send</Button>
            </Box>
        </Box>
    )
}

export default Form;
