import React from 'react';
import { Box, Grid, IconButton} from '@material-ui/core';
import { ReactComponent as TitleBlob } from '../../assets/images/ps-title.svg';
import BlobOption from '../../components/BlobOption';

// User's picked option
var showOption;

const setShowOption = option => {showOption = option};


const PickShow = () => {
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
                        href="/pickplaylist" 
                        onClick={() => setShowOption("Movies")} 
                        disableRipple="true">
                        <BlobOption option="Movies"/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton 
                        href="/pickplaylist" 
                        onClick={() => setShowOption("Series")} 
                        disableRipple="true">
                        <BlobOption option="Series"/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton 
                        href="/pickplaylist"
                        onClick={() => setShowOption("Both")} 
                        disableRipple="true">
                        <BlobOption option="Both"/>
                    </IconButton>
                </Grid>
            </Grid>

        </Box>
    )
}

export default PickShow