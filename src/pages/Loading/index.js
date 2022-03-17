import React from 'react'
import { Box } from '@material-ui/core';

const NotFound = () => {
    return (
        <Box
            display="grid"
            bgcolor="#BB9CCB"
            alignItems="center"
            justifyContent="center"
        >
        <div className="lp-title" >
            Curating your Netflix watch list...
        </div>
        {/* <div className="lp-dot">
            ...
        </div> */}
        </Box>
    )
}

export default NotFound