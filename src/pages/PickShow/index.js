import React, { useState } from 'react';
import { Box, Grid, IconButton} from '@material-ui/core';
import { ReactComponent as TitleBlob } from '../../assets/images/ps-title.svg';
import BlobOption from '../../components/BlobOption';
import { Navigate } from 'react-router-dom';


const PickShow = props => {
    const [picked, setPicked] = useState(false);

    const setShowPick = option => {
        props.setUser('showPick', option);      
        setPicked(true);
    }

    return (
        picked ? (<Navigate push to="/playlistpick"/>) : 
        <Box 
            display="grid" 
            bgcolor="#EEEEE"
            alignItems="center" 
            justifyContent="center"
            >

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <div className="ps-title-box">
                    <TitleBlob/>
                </div>
                <div className="ps-title">
                    What are you in the mood for?
                </div>
            </Box>

            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"  
                spacing={10}              
            >
                <Grid item>
                    <IconButton onClick = { () => setShowPick("movies") }>
                        <BlobOption option="Movies"/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton onClick = { () => setShowPick("series") } >
                        <BlobOption option="Series"/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton onClick = { () => setShowPick("both") } >
                        <BlobOption option="Both"/>
                    </IconButton>
                </Grid>
            </Grid>

        </Box>
    );
}

export default PickShow;