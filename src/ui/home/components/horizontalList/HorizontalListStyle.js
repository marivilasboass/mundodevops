import { StyleSheet } from 'react-native';
import colors from '../../../../assets/colors/Colors';
import {Fonts} from '../../../../utils/Fonts';

export default  StyleSheet.create({

  root: {
    marginTop:5,
    flex: 1
  },
  exercises: {
    backgroundColor: colors.light_gray, 
    borderRadius: 10, 
    marginHorizontal: 20, 
    marginTop: 20
  },
  circle: {
    backgroundColor: colors.gray, 
    width: 100, 
    height: 100, 
    borderRadius: 100/2, 
    marginBottom: 10, 
    marginTop: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  view: {
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    marginRight: 5,
  },
  title: {
    color: colors.text,
    justifyContent: 'center', 
    alignItems: 'center',
    marginLeft: 25,
    fontSize: 20,
    fontFamily: Fonts.Montserrat
  },
  description: {
    color: colors.text,
    fontSize: 10,
    fontFamily: Fonts.Montserrat
  },
  rightView: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
  },
  buttonRed: {
    backgroundColor: 'red',
    width: 65,
    height: 20,
    marginRight: 10,
    borderRadius: 15,
  },
  button: {
    width: 65,
    height: 20,
    marginRight: 10,
    borderRadius: 15,
  },
  fontButton:{
    fontSize: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: Fonts.Montserrat
  }
});
