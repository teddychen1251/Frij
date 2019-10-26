import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Image, Text, View } from 'react-native';

const styles = StyleSheet.create({
  ButtonStyle: {
    padding : 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000'
  },
  TextStyle: {
    color: '#000',
    textAlign: 'center'
  }
});

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register'
    };
    
    render() {
        return (
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
            </View>
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
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
              <View style = {{paddingVertical : 10, marginHorizontal : '30%', justifyContent: 'center'}}>
                <TouchableOpacity
                  style = {styles.ButtonStyle}
                  activeOpacity = { .5 }
                  onPress={() => {
                          navigate('Register')
                      }}
                >
                  <Text style = {styles.TextStyle}> Register </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
    }
}

export default RegisterScreen;
