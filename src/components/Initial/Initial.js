import React from 'react'
import noodles from '../../images/noodles.png'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFFFF',
        height: '100%',
        padding: '1rem',
        border: '0',
        borderRadius: '10px'
    },
    image_const: {
        width: '150px',
        opacity: '0.7',
        margin: '0 auto'
    },
}));

const Initial = () => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <img src={noodles} alt="noodles" className={classes.image_const} />
            <Typography
                variant="h6"
                align='center'
            >
                Search your desired food item in the above search bar
            </Typography>
        </div>
    )
}

export default Initial
