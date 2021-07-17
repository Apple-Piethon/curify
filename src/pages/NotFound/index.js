import React from 'react'
import { Box } from '@material-ui/core';

const NotFound = () => {
    return (
        <Box
            display="grid"
            bgcolor="#EEEEEE"
            alignItems="center"
            justifyContent="center"
        >
        <div className="ps-title">
            NOT FOUND 404
        </div>
        </Box>
    )
}

export default NotFound