import React,{useReducer,useEffect} from 'react';
import axios from 'axios';
import socket from './Socket';
import {reducer} from './Reducer';
import JoinBlock from "./JoinBlock";
import Chat from './Chat'

function App() {
    const[state,dispatch] =useReducer(reducer,{
        isAuth: false,
        users: [],
        messages: [],
        userName: '',
        roomId: null
    })

    const setUsers = (dataUsers)=>{
        dispatch({
            type: 'SET_USERS',
            payload: dataUsers
        })
    }
    const setMessage = (dataMessages)=>{
        dispatch({
            type: 'SET_MESSAGES',
            payload: dataMessages
        })

    }

    useEffect(()=>{
        socket.on('ROOM:JOINED',(dataUsers)=> setUsers(dataUsers));
        socket.on('ROOM:DISCONNECT_USER',(dataUsers)=> setUsers(dataUsers));
        socket.on('ROOM:ADD_MESSAGE',(dataMessages)=> setMessage(dataMessages));

    },[])

    const login = async (payload)=>{
        dispatch({
            type: 'IS_AUTH',
            payload
        })
        socket.emit('ROOM:JOIN',payload);
        const {data} = await axios.get(`rooms/${payload.roomId}`)
        dispatch({
            type: 'SET_DATA',
            payload: data
        })
    }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',minHeight: '600px'}} >
         {!state.isAuth ? <JoinBlock login = {login}/> : <Chat {...state} setMessage={setMessage} />}
    </div>
  );
}

export default App;
