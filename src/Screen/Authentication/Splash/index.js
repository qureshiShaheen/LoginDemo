//imports from react native
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//imports from responsive
import R from '../../../res/R';

//main component for splash screen
const Splash = ({navigation}) => {

  setTimeout(() => {
    navigation.navigate('LogIn')
  }, 3000);

  return (
    <View style={styles.container}>
        <Text style={styles.TextWlcome}>
           Welcome
        </Text>
    </View>
  )
}

//export components
export default Splash;

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    backgroundColor: '#FFFFFF',
  },
  TextWlcome: {
    fontSize:R.FontSize.F_57,
   textAlign: 'center',
   color:R.colors.ThemeColor
  },
});
