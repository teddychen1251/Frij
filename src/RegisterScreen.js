import React from 'react';
import { TextInput, Image, Text, View } from 'react-native';

class RegisterScreen extends React.Component {
    render() {
        return (
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
            </View>
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <TextInput
                style={{marginLeft : '38%', marginRight : '33%', height: 40}}
                placeholder = "Organization:"
              />
              <TextInput
                style={{marginLeft : '38%', marginRight : '33%', height: 40}}
                placeholder = "Create username:"
              />
              <TextInput
                style={{marginLeft : '38%', marginRight : '33%', height: 40}}
                placeholder = "Create password:"
              />
              <TextInput
                style={{marginLeft : '38%', marginRight : '33%', height: 40}}
                placeholder = "Verify password:"
              />
            </View>
          </View>
        )
    }
}

export default RegisterScreen;
