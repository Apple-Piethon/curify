import React from 'react';
import { Box } from '@material-ui/core';
import { ReactComponent as MovieBlob } from '../../assets/images/ps-blob1.svg';
import { ReactComponent as SeriesBlob } from '../../assets/images/ps-blob2.svg';
import { ReactComponent as BothBlob } from '../../assets/images/ps-blob3.svg';

const BlobOption = props => {
    const option = props.option;

    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
        >
            <div className="ps-blob">
                { option === "Movies" ? <MovieBlob/>
                : option === "Series" ? <SeriesBlob/>
                : option === "Both"   ? <BothBlob /> 
                : {}
                }
            </div>
            <div className="ps-blob-title">
                {option}
            </div>
        </Box>
    )
}

export default BlobOption