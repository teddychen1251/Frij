import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image, TextInput, Text, View } from 'react-native';

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

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={{justifyContent: 'center'}}>
              <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                <Image source = {require('./assets/frijlogo.png')} style={{width: '50%', height: '50%'}} resizeMode = "contain"/>
              </View>
              <TextInput
                style={{marginLeft : '33%', marginRight : '29%', height: 40, justifyContent: 'center'}}
                placeholder = "Enter your email!"
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = 'false'
              />
              <TextInput
                style={{marginLeft : '33%', marginRight : '29%', height: 40}}
                placeholder = "Enter your password!"
                secureTextEntry = 'true'
                autoCompleteType = 'off'
                autoCapitalize = 'none'
                autoCorrect = 'false'
              />
              <View style = {{marginHorizontal : '30%', paddingVertical: 20, justifyContent: 'center'}}>
                <TouchableOpacity
                  style = {styles.ButtonStyle}
                  activeOpacity = { .5 }
                  onPress={() => {
                          navigate('Frij')
                      }}
                >
                  <Text style = {styles.TextStyle}> Login </Text>
                </TouchableOpacity>
              </View>
              <View style={{paddingVertical: 70, flex : 1, alignItems: "center", justifyContent: "center"}}>
                <Image source = {require('./assets/refrigerator.png')}  style={{width: '400%', height: '400%'}} resizeMode = "contain"/>
              </View>
            </View>
            <View style = {{height : 30}}>
            </View>
          </KeyboardAvoidingView>
        );
    }
}




export default LoginScreen;
