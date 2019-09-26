import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors/Colors';

export default  StyleSheet.create({
  root: {
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: 'center',
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  },
  header: {
    backgroundColor: colors.gray
  },
  title: {
    marginTop: 15,
    color: colors.text
  },
  flatListRowHorizontal:{
    flex: 1
  },
  flatListRowVertical: {
    flex: 1,
    marginTop: 200,
  },
  filter: {
    backgroundColor: colors.light_gray, 
    borderRadius: 10, 
    marginHorizontal: 20,
    marginTop: 10, 
    height: 100
  },
});