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
        const {navigate} = this.props.navigation;
        return (
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
            </View>
            <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
              <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <TextInput
                  style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                  placeholder = "Organization:"
                  autoCompleteType = 'off'
                  autoCapitalize = 'none'
                  autoCorrect = 'false'
                />
                <TextInput
                  style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                  placeholder = "Name:"
                  autoCompleteType = 'off'
                  autoCapitalize = 'none'
                  autoCorrect = 'false'
                />
                <TextInput
                  style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                  placeholder = "Email account:"
                  autoCompleteType = 'off'
                  autoCapitalize = 'none'
                  autoCorrect = 'false'
                />
                <TextInput
                  style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                  placeholder = "Create password:"
                  secureTextEntry = 'true'
                  autoCompleteType = 'off'
                  autoCapitalize = 'none'
                  autoCorrect = 'false'
                />
                <TextInput
                  style={{marginLeft : '37%', marginRight : '25%', height: 40}}
                  placeholder = "Verify password:"
                  secureTextEntry = 'true'
                  autoCompleteType = 'off'
                  autoCapitalize = 'none'
                  autoCorrect = 'false'
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
          </View>
        )
    }
}

export default RegisterScreen;
