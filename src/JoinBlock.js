import React,{useState} from 'react';
import axios from 'axios';
import socket from './Socket'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Box,Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        width: '300px',
        marginTop: '50px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid grey',
        borderRadius: '3px',
    },
    textField:{
        width: '100%',
        marginBottom: '20px'

    },
    rules: {
        marginBottom: '15px'
    }

}));


const JoinBlock = ({login})=> {
    const classes = useStyles()

    const[roomId,setRooms] = useState('');
    const[name,setName] = useState('');
    const[error,setError] = useState(false);

   const postData = ()=>{
        if(!roomId || !name)
            return setError(true)
       axios.post('https://shrouded-journey-95175.herokuapp.com/rooms',{
           name,roomId
       }).then( res => {
          setRooms('')
          setName('')
          login({name,roomId})


       })
       setError(false)
    }

    return (
        <Box component='form' className={classes.container}>
            {error && <Typography style={{color: 'tomato',marginBottom:'15px'}} variant='body2'>Заполните оба поля ввода</Typography>}
            <TextField onChange={ e => setRooms(e.target.value)} className={classes.textField} variant='outlined' label='Room' value={roomId} />
            <TextField onChange={ e => setName(e.target.value)}  className={classes.textField} variant='outlined' label='Name' value={name}/>
            <Button onClick={postData} style={{width: '100px',marginBottom: '50px'}} variant='outlined' color='secondary' fullWidth={false}> Join</Button>

            <Typography variant='body1' className={classes.rules}> How to use this chat ? :)</Typography>
            <Typography variant='body1' className={classes.rules}> Step 1: User1 enter username in input's name, and enter number of room in the input's room </Typography>
            <Typography variant='body1' className={classes.rules}> Step 2: User2 also enter username in input's name, and enter the same number of room in the input's room </Typography>
            <Typography variant='body1' className={classes.rules}> Step 3: User1 and User2 can chat </Typography>
        </Box>

    );
}

export default JoinBlock ;
