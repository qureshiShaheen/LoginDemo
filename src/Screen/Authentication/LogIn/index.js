import React, { useState } from 'react';
import { View , KeyboardAvoidingView, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Style';

const LogIn = ({ navigation }) => {
  //=====State=====
  const [saveData, setSaveData] = useState({
    userName: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  });

  //=====handle Login=====

  const handlePress = () => {
    let isValid = true;
    let errors = {
      userName: '',
      password: '',
    };
    if (saveData.userName.trim() === '') {
      isValid = false;
      errors.userName = 'Username is required';
    }

    if (saveData.password.trim() === '') {
      isValid = false;
      errors.password = 'Password is required';
    } else if (saveData.userName === 'DemoUser' && saveData.password === 'Test@123') {
      alert('Login successful')
      navigation.navigate('Home')
    } else {
      alert('Login Failed');
    }
    setErrors(errors);
    return isValid;
  };

  return (
    <View style={styles.container}>
      {/* This is user data for login */}
     <Text style={styles.user}>Login user- DemoUser / Test@123</Text>
      <KeyboardAvoidingView>
      <View>
        <Input
          placeholder="Username"
          placeholderTextColor={'#464444'}
          onChangeText={(val) => {
            setSaveData({
              ...saveData,
              userName: val
            });
            setErrors({
              ...errors,
              userName: ''
            });
          }}
          error={errors.userName}
        />
        <Input style={styles.textContainer}
          placeholder="Password"
          placeholderTextColor={'#464444'}
          onChangeText={(val) => {
            setSaveData({
              ...saveData,
              password: val,
            });
            setErrors({
              ...errors,
              password: ''
            });
          }}
          error={errors.password}
          secureTextEntry={true} />

      </View>
      <View>
        <Button
          onPress={handlePress}
          title={'Login'} />
      </View>
      </KeyboardAvoidingView>

      
    </View>
  );
};

// export component
export default LogIn;
