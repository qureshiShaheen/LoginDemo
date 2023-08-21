//function import from react and react native
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//imports from responcive
import R from '../../res/R';

//main function
const DetailScreen = ({ route, navigation }) => {

  //gettting data from routes parameter
  const { post } = route.params;

  return (
    <View style={styles.contenair}>
      <View>
        <Text style={styles.heading}>Detail Screen</Text>
      </View>
      <Text style={styles.headingText}><Text style={styles.tittle}>Id : </Text>{post.id}</Text>
      <Text style={styles.headingText}><Text style={styles.tittle}>User Id : </Text>{post.userId}</Text>
      <Text style={styles.headingText}><Text style={styles.tittle}>Tittle : </Text>{post.title}</Text>
      <Text style={styles.headingText}><Text style={styles.tittle}>Body : </Text>{post.body}</Text>

      <TouchableOpacity style={styles.buttonView}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

//styles 
const styles = StyleSheet.create({
  contenair: {
    flex: 1,
    padding: 16,
  },
  subContainer: {
    marginHorizontal: '8%',
    marginTop: 5
  },
  headingText: {
    marginTop: 10,
    fontSize: R.FontSize.F_22,
  },
  heading: {
    color: R.colors.DARK_BROWN,
    fontSize: R.FontSize.F_35,
    alignSelf: 'center',
    marginTop: '5%',
    fontWeight: '700'
  },
  tittle: {
    color: R.colors.BLACK,
    fontWeight: '500',
  },
  buttonView: {
    alignItems: 'center',
    backgroundColor: R.colors.DARK_BROWN,
    borderRadius: 10,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '10%'
  },
  buttonText: { color: 'white' },
})