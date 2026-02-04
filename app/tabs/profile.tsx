import React from 'react';
import {View, StatusBar, UIManager, Platform, Text, StyleSheet} from 'react-native';
import LoginScreen from 'react-native-login-screen';
import TextInput from 'react-native-text-input-interactive';
import Button from '@/components/Button';




const HomeScreen = () => {
  //Initializes the variable constants
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [isSignup, setIsSignup] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  //Render page for the profile screen
  const renderProfileScreen = () => (
    <View style={styles.profileContainer}>
      <Text>Welcome, {username}!</Text>
      <View style={styles.logOutButtonContainer}>
        <Button label='Log out' onPress={() => setIsLoggedIn(false)}/>
      </View>
    </View>
  );

  //Render page for the signup screen
  const renderSignupLoginScreen = () => (
    <LoginScreen
      logoImageSource={require('../../assets/logo-example.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {setIsSignup (true)}}
      onEmailChange={setUsername}
      loginButtonText={'Create an account'}
      disableDivider
      disableSocialButtons
      style={{backgroundColor:'#ffe8d6'}}
      signupTextStyle={{color:'#6b705c'}}
      loginButtonStyle={{backgroundColor:'#ddbea9'}}
      signupText='Log In'
      textInputChildren={
        <View style={{marginTop: 16}}>
          <TextInput
            placeholder="Re-Password"
            secureTextEntry
            onChangeText={setRepassword}
          />
        </View>
      }
      onPasswordChange={setPassword}
    />
  );

  //Render page for the login screen
  const renderLoginScreen = () => (
    <LoginScreen
      logoImageSource={require('../../assets/logo-example.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {setIsSignup (false)}}
      onEmailChange={setUsername}
      onPasswordChange={setPassword}
      disableSocialButtons
      enablePasswordValidation
      disableDivider
      signupTextStyle={{color:'#6b705c'}}
      loginButtonStyle={{backgroundColor:'#ddbea9'}}
      style={{backgroundColor:'#ffe8d6'}}
    />
  );

  //Main return function to determine which screen to show
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      {isLoggedIn ? (
        renderProfileScreen()
      ) : (
        isSignup ? renderLoginScreen() : renderSignupLoginScreen()
      )}
    </View>
  );
};

export default HomeScreen;

//Stylesheet
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor:'#ffe8d6',
    flex: 1,

  },
  logOutButtonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
    verticalAlign: 'bottom',
  },
});