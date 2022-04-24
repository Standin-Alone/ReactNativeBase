
// STYLESHEET

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import constants from '../../constants';

export const styles = StyleSheet.create({

    primaryContainer:{
        flexDirection:'row',    
        marginVertical:constants.Dimensions.vh(2)
    },
    primaryInput:{
        borderWidth:1,
        width:constants.Dimensions.vw(90),
        borderRadius:10,        
        borderColor:constants.Colors.gray,        
        fontFamily:constants.Fonts.GothamRegular,
        paddingLeft:constants.Dimensions.vw(8),        
        fontSize:18
    },
    primaryErrorMessage:{
        color:constants.Colors.danger,
        fontFamily:constants.Fonts.GothamRegular
    },
    icon:{
        position:'absolute',
        left:5

    }
  
});

