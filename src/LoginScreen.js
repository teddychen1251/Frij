import React from 'react';
import { Image, TextInput, Text, View } from 'react-native';



class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{justifyContent: 'center'}}>
              <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
              </View>
              <TextInput
                style={{marginLeft : '33%', marginRight : '33%', height: 40}}
                placeholder = "Enter your username!"
              />
              <TextInput
                style={{marginLeft : '33%', marginRight : '33%', height: 40}}
                placeholder = "Enter your password!"
              />
            </View>
        );
    }
}




export default LoginScreen;
