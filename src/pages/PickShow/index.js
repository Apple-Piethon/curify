import React from 'react';
import { Box, Grid, SvgIcon, DeleteIcon} from '@material-ui/core';
import { ReactComponent as TitleBlob } from '../../assets/images/ps-title.svg';
import BlobOption from '../../components/BlobOption';

const PickShow = () => {
    return (
        <Box 
            display="grid" 
            bgcolor="#EEEEE"
            alignItems="center" 
            justifyContent="center">

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
                justifyContent="center"
                alignItems="center"
            >

               <BlobOption option="Movies"/>

            </Grid>

        </Box>
    )
}

export default PickShow