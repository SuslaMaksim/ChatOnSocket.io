import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    listItem:{
        backgroundColor: 'white',
        borderRadius: '5px',
        marginBottom: '10px',
        cursor: 'pointer',
        '&:last-Child':{
            marginBottom: '0px'
        }
    }
}))

const User = ({name})=>{
     const classes = useStyles()
    return(
        <ListItem className={classes.listItem}>
            <ListItemAvatar >
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
        </ListItem>
    )
}

export default User;
