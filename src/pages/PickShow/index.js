import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { ReactComponent as Blob } from '../../assets/images/blob.svg';
const PickShow = () => {
    return (
        <Box
        display="grid"
        bgcolor="#EEEEEE"
        alignItems="center"
        justifyContent="center"
        >
        <div className="ps-title">
            What are you in the mood for?
        </div>
        <Blob
            href="/#"> Hi </Blob>
        </Box>
    )
}

export default PickShow