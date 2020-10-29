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
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid grey',
        borderRadius: '3px'
    },
    textField:{
        width: '100%',
        marginBottom: '20px'

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
       axios.post('https://shrouded-journey-95175.herokuapp.com//rooms',{
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
            {error && <Typography style={{color: 'tomato',marginBottom:'15px'}} variant='body2'>Заполните оба пол ввода</Typography>}
            <TextField onChange={ e => setRooms(e.target.value)} className={classes.textField} variant='outlined' label='Rooms' value={roomId} />
            <TextField onChange={ e => setName(e.target.value)}  className={classes.textField} variant='outlined' label='Name' value={name}/>
            <Button onClick={postData} style={{width: '100px'}} variant='outlined' color='secondary' fullWidth={false}> Join</Button>


        </Box>
    );
}

export default JoinBlock ;
