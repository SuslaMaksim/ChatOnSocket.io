import React,{useEffect,useRef} from 'react';
import socket from './Socket';

import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {List} from "@material-ui/core";
import User from './User';
import Letter from "./Letter";
import Form from "./Form";


const useStyles = makeStyles((theme) => ({
    chatContainer: {
        display: 'flex',
        width: '800px',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius: '6px',
        overflow: 'hidden'
    },
    usersContainer:{
        backgroundColor: ' #f2f2f2',
        padding: '10px',

    },
    messageContainer:{
        backgroundColor: ' white',
        padding: '10px',
        minHeight: '500px',
    },
    list:{
        width: '100%'
    },
    letterContainer:{
        maxHeight: '250px',
        overflow: 'auto'
    },
    hr: {
        marginBottom: '20px',
        border: '1px solid #f2f2f2'
    }
}))

const Chat = ({users,messages,userName,roomId,setMessage})=>{
    let classes = useStyles();

    const messagesRef = useRef(null);

    useEffect(()=>{
        messagesRef.current.scrollTo(0,99999)
    },[messages])

    let addMessage = (message)=>{
        socket.emit('ROOM:SET_MESSAGE',{message,userName,roomId});
        setMessage({message,userName});
    }

    return(

        <Box className={classes.chatContainer}>

            <Grid container >
                <Grid container direction='column' item md={4} sm={4} xs={12} className={classes.usersContainer}>
                    <Typography align='center' variant='h6'> ROOM №: ({roomId})</Typography>
                    <Typography variant='h6'> Online: ({users.length})</Typography>
                    <List className={classes.list}>
                        {!users ? null : users.map( (name,index) => <User name = {name} key = {index}/>)}
                    </List>
                </Grid>
                <Grid container direction='column' justify='space-between' item md={8} sm={8} xs={12}  className={classes.messageContainer}>
                    <Box component='div' className={classes.letterContainer} ref = {messagesRef}>
                        {!messages ? null : messages.map( (item,index)  => <Letter name = {item.userName} key = {index} text = {item.message}/>)}
                    </Box>
                    <Box component='div' className={classes.formContainer}>
                        <hr className={classes.hr} />
                        <Form addMessage={addMessage}/>
                    </Box>
               </Grid>

            </Grid>
        </Box>
    )
}
export default Chat;