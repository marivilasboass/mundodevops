import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root :{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      resizeMode: 'contain',
      width: 284,
      height: 127,
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    }
  }
);
