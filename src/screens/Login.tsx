import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {login} from '../services/auth';

GoogleSignin.configure({
  webClientId:
    '704457703486-0emfcu6o024ccecf1cgutphbk4tsu4nk.apps.googleusercontent.com',
});

const Login = () => {
  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Standard}
        onPress={login}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  googleButton: {
    borderRadius: 10,
  },
});

export default Login;
