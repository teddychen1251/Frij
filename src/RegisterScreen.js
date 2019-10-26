import React from 'react';
import { TextInput, Image, Text, View } from 'react-native';

class RegisterScreen extends React.Component {
    render() {
        return (
          <View style={{justifyContent: 'center'}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
            </View>
            <TextInput
              style={{marginLeft : '38%', marginRight : '33%', height: 40}}
              placeholder = "Create username"
            />
            <TextInput
              style={{marginLeft : '38%', marginRight : '33%', height: 40}}
              placeholder = "Create password"
            />
            <TextInput
              style={{marginLeft : '38%', marginRight : '33%', height: 40}}
              placeholder = "Verify password"
            />
          </View>
        )
    }
}

export default RegisterScreen;
