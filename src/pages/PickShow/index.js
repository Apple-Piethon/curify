import React from 'react';
import { Box, Grid, IconButton} from '@material-ui/core';
import { ReactComponent as TitleBlob } from '../../assets/images/ps-title.svg';
import BlobOption from '../../components/BlobOption';


const PickShow = () => {
    const setShowPick = option => {
        sessionStorage.setItem('showPick', option);
    }

    return (
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
                    <IconButton 
                        href="/playlistpick" 
                        onClick = { () => setShowPick("movies") }
                        disableRipple
                        >
                        <BlobOption option="Movies"/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton 
                        href="/playlistpick" 
                        onClick = { () => setShowPick("series") }
                        disableRipple
                        >
                        <BlobOption option="Series"/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton 
                        href="/playlistpick"
                        onClick = { () => setShowPick("both") }
                        disableRipple
                        >
                        <BlobOption option="Both"/>
                    </IconButton>
                </Grid>
            </Grid>

        </Box>
    );
}

export default PickShow;