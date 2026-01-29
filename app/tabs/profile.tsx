import React from 'react';
import {View, StatusBar, UIManager, Platform, Text} from 'react-native';
import LoginScreen from 'react-native-login-screen';
import TextInput from 'react-native-text-input-interactive';



const HomeScreen = () => {
  //Initializes the variable constants
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRepassword] = React.useState('');
  const [isSignup, setIsSignup] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  //Render page for the profile screen
  const renderProfileScreen = () => (
    <View>
      <Text>Welcome, {username}!</Text>
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