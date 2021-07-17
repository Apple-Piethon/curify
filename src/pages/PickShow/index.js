import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { View, Text } from 'react-native';

const PickShow = () => {
    return (
        <Box
            display="grid"
            bgcolor="#EEEEE"
            alignItems="center"
            justifyContent="center"
        >

        <View>
            <svg width="1284" height="353" viewBox="0 0 1284 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1284 293.265C1284 423.143 1042.5 299.265 724 293.265C305.092 293.265 0 361.415 0 77.2646C0 -100.235 288.5 87.2645 724 77.2646C1170.5 67.012 1284 45.5298 1284 293.265Z" fill="#B6A4A4" fill-opacity="0.2"/>
            </svg>
            <Text>
                <div className="ps-title">
                    What are you in the mood for?
                </div>
            </Text>
        </View>
        </Box>
    )
}

export default PickShow