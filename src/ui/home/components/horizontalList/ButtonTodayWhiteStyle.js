import { StyleSheet } from 'react-native';
import {Fonts} from '../../../../utils/Fonts';
import Colors from '../../../../assets/colors/Colors';

export default  StyleSheet.create({

  button: {
    backgroundColor: Colors.light_gray,
    width: 70,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
    borderColor: Colors.light_gray,
  },
  fontButton:{
    color: Colors.light_gray,
    fontSize: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Fonts.Montserrat
  }
});
